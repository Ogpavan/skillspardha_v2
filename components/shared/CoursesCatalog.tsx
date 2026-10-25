"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

type Course = {
  id: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
};

type CatalogCopy = {
  eyebrow: string;
  title: string;
  description: string;
  searchLabel: string;
  searchPlaceholder: string;
  filterLabel: string;
  allCoursesLabel: string;
  resultSingular: string;
  resultPlural: string;
  durationLabel: string;
  levelLabel: string;
  contactCta: string;
  emptyTitle: string;
  emptyDescription: string;
  clearFiltersCta: string;
};

export function CoursesCatalog({ courses, copy }: { courses: Course[]; copy: CatalogCopy }) {
  const [activeCategory, setActiveCategory] = useState(copy.allCoursesLabel);
  const [query, setQuery] = useState("");
  const categories = useMemo(() => Array.from(new Set(courses.map((course) => course.category))), [courses]);
  const visibleCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesCategory = activeCategory === copy.allCoursesLabel || course.category === activeCategory;
      const searchable = `${course.title} ${course.description} ${course.category} ${course.duration} ${course.level}`.toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, copy.allCoursesLabel, courses, query]);

  function clearFilters() {
    setActiveCategory(copy.allCoursesLabel);
    setQuery("");
  }

  return (
    <section id="course-catalog" className="courses-catalog-section" aria-labelledby="course-catalog-heading">
      <div className="courses-catalog-header">
        <div className="courses-catalog-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="course-catalog-heading">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
        <label className="courses-search">
          <span className="sr-only">{copy.searchLabel}</span>
          <Search size={19} aria-hidden="true" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder={copy.searchPlaceholder} />
        </label>
      </div>

      <div className="courses-catalog-controls">
        <nav className="courses-category-filters" aria-label={copy.filterLabel}>
          <button type="button" aria-pressed={activeCategory === copy.allCoursesLabel} className={activeCategory === copy.allCoursesLabel ? "courses-filter-active" : ""} onClick={() => setActiveCategory(copy.allCoursesLabel)}>{copy.allCoursesLabel}</button>
          {categories.map((category) => <button type="button" key={category} aria-pressed={activeCategory === category} className={activeCategory === category ? "courses-filter-active" : ""} onClick={() => setActiveCategory(category)}>{category}</button>)}
        </nav>
        <p className="courses-results-count">{visibleCourses.length} {visibleCourses.length === 1 ? copy.resultSingular : copy.resultPlural}</p>
      </div>

      {visibleCourses.length > 0 ? (
        <div className="courses-card-grid">
          {visibleCourses.map((course) => (
            <article className="course-listing-card" key={course.id}>
              <div className="course-listing-image">
                <Image src={course.image} alt={course.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" className="object-cover" />
                <span className="course-listing-level-badge">{course.level}</span>
              </div>
              <div className="course-listing-body">
                <h3>{course.title}</h3>
                <p className="course-listing-description">{course.description}</p>
                <div className="course-listing-footer">
                  <p><span>{copy.durationLabel}</span><strong>{course.duration}</strong></p>
                  <ButtonLink href="/contact">{copy.contactCta} <ArrowUpRight size={15} aria-hidden="true" /></ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="courses-empty-state">
          <h3>{copy.emptyTitle}</h3>
          <p>{copy.emptyDescription}</p>
          <button type="button" onClick={clearFilters}>{copy.clearFiltersCta}</button>
        </div>
      )}
    </section>
  );
}
