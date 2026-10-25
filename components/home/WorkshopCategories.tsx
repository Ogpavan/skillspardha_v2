import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { SectionHeading } from "@/components/shared/SectionHeading";
import content from "@/data/home-content.json";

export function WorkshopCategories() {
  const copy = content.categories;
  return (
    <section id="categories" className="section-pad bg-white">
      <div className="container-width">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link href={`/workshops/${category.slug}`} key={category.slug} className="category-row group">
              <span className="text-xs text-muted tabular-nums">0{index + 1}</span>
              <span className="min-w-0 flex-1"><strong className="block font-semibold tracking-[-0.03em]">{category.name}</strong><span className="mt-1 block text-sm text-muted">{category.detail}</span></span>
              <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
