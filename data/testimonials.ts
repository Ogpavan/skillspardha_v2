import content from "./content-data.json";

export type Testimonial = {
  name: string;
  workshop: string;
  quote: string;
  initials: string;
  tone: string;
};

export const testimonials = content.testimonials as Testimonial[];
