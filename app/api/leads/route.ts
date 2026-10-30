import nodemailer from "nodemailer";

const allowedInterests = new Set([
  "Workshops",
  "Technology Accelerator",
  "Courses and learning paths",
  "Mentoring or partnerships",
  "Something else",
]);

function textValue(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) {
    return Response.json({ error: "The enquiry is too long." }, { status: 413 });
  }

  let payload: unknown;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 12_000) {
      return Response.json({ error: "The enquiry is too long." }, { status: 413 });
    }
    payload = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: "Send the enquiry as valid JSON." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return Response.json({ error: "The enquiry details are invalid." }, { status: 400 });
  }

  const values = payload as Record<string, unknown>;
  // Quietly accept the hidden field so basic bots don't learn that they were filtered.
  if (textValue(values.website, 200)) return Response.json({ ok: true });

  const name = textValue(values.name, 120);
  const phone = textValue(values.phone, 40);
  const email = textValue(values.email, 254);
  const interest = textValue(values.interest, 80);
  const city = textValue(values.city, 120);
  const message = textValue(values.message, 3_000);

  if (!name || !phone || !email || !interest || values.consent !== true) {
    return Response.json({ error: "Complete the required fields and consent to be contacted." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (!allowedInterests.has(interest)) {
    return Response.json({ error: "Choose one of the listed enquiry topics." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM?.trim();
  if (!host || !Number.isInteger(port) || !user || !pass || !from) {
    return Response.json({ error: "Enquiry email is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE?.trim().toLowerCase() === "true",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to: ["admin@skillspardha.com", "pawantwp@gmail.com"],
      replyTo: { name, address: email },
      subject: `New SkillSpardha website enquiry: ${interest}`,
      text: [
        "A new lead was submitted through the SkillSpardha website.",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Interested in: ${interest}`,
        `City: ${city || "Not provided"}`,
        "Permission to contact about this enquiry: Yes",
        "",
        `Message:\n${message || "Not provided"}`,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "We couldn’t send your enquiry just now. Please try again shortly." }, { status: 502 });
  }
}
