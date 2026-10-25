import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import content from "@/data/home-content.json";

export const metadata: Metadata = {
  metadataBase: new URL(content.site.url),
  title: content.site.title,
  description: content.site.description,
  alternates: { canonical: content.site.url },
  openGraph: {
    title: content.site.title,
    description: content.site.socialDescription,
    url: content.site.url,
    siteName: content.site.name,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: content.site.socialImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: content.site.title,
    description: content.site.socialDescription,
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><a href="#main-content" className="skip-link">{content.accessibility.skipToContent}</a>{children}</body>
    </html>
  );
}
