import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import content from "@/data/home-content.json";

export function Footer() {
  const copy = content.footer;
  return (
    <footer className="border-t border-[#2f2a43] bg-[#201c31] text-white">
      <div className="container-width py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr] lg:gap-20">
          <div>
            <Link href="/" className="brand-mark brand-mark-footer"><span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span><span>{content.site.brandStart}<span>{content.site.brandEnd}</span></span></Link>
            <p className="mt-6 max-w-xs text-[15px] leading-7 text-[#c1bccb]">{copy.tagline}</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {copy.groups.map((group) => <div key={group.title}><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#d9eb72]">{group.title}</h2><ul className="mt-5 space-y-3">{group.links.map(([label, href]) => <li key={label}><Link href={href} className="inline-flex items-center gap-1 text-sm text-[#c1bccb] transition-colors hover:text-white">{label}<ArrowUpRight className="size-3" aria-hidden="true" /></Link></li>)}</ul></div>)}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-[#3b354f] pt-5 text-xs text-[#9993a8] sm:flex-row sm:items-center sm:justify-between"><p>{copy.copyright}</p><p>{copy.closing}</p></div>
      </div>
    </footer>
  );
}
