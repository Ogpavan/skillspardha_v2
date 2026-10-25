import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function InteriorLayout({ children, showBackLink = true }: { children: ReactNode; showBackLink?: boolean }) {
  return <><Header /><main id="main-content" className={`container-width min-h-[65vh] ${showBackLink ? "py-14 sm:py-20" : "pb-14 pt-5 sm:pb-20 sm:pt-8"}`}>{showBackLink ? <Link href="/" className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-primary"><ArrowLeft size={16} aria-hidden="true" />Back to SkillSpardha</Link> : null}{children}</main><Footer /></>;
}
