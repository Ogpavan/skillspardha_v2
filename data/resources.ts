import content from "./content-data.json";

export type Resource = {
  category: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image: string;
  sections: Array<{ title: string; text: string }>;
};

export const resources = content.resources as Resource[];
