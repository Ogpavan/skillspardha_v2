import content from "./content-data.json";

export type WorkshopCategory = {
  name: string;
  slug: string;
  detail: string;
};

export const categories = content.categories as WorkshopCategory[];
