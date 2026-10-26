import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the SkillSpardha homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>SkillSpardha \| Live Online Workshops &amp; Practical Learning<\/title>/i);
  assert.match(html, /<h1[^>]*>Practical Skills\./);
  assert.match(html, /Upcoming workshops/i);
  assert.match(html, /Learn from experienced mentors/i);
  assert.match(html, /Frequently asked questions/i);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview/i);
});

test("homepage keeps the requested semantic structure and preview assets", async () => {
  const response = await render();
  const html = await response.text();
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1);
  assert.match(html, /<header\b/);
  assert.match(html, /<nav\b/);
  assert.match(html, /<main\b/);
  assert.match(html, /<footer\b/);
  assert.match(html, /skillspardha-hero\.webp/);
  assert.match(html, /https:\/\/skillspardha\.com\/og\.webp/);
  await access(new URL("../public/og.webp", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
