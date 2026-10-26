import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import content from "@/data/home-content.json";

export function CertificateSection() {
  const copy = content.certificates;
  return (
    <section id="certificates" className="section-pad bg-[#2d265b] text-white">
      <div className="container-width grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20"><Reveal><p className="eyebrow eyebrow-on-dark">{copy.eyebrow}</p><h2 className="section-title mt-4 max-w-lg text-white">{copy.title}</h2><p className="mt-5 max-w-md text-[16px] leading-7 text-[#c8c3d3]">{copy.description}</p><ButtonLink href="#workshops" variant="light" className="mt-8">{copy.explore} <ArrowUpRight className="size-4" aria-hidden="true" /></ButtonLink></Reveal><Reveal delay={0.08}><figure className="certificate-image-wrap"><Image src="/images/skillspardha-certificate.webp" alt={copy.imageAlt} width={1376} height={768} sizes="(max-width: 1024px) 100vw, 50vw" className="certificate-image" /><figcaption>{copy.sample}</figcaption></figure></Reveal></div>
    </section>
  );
}
