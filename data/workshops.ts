import content from "./content-data.json";

export type Workshop = {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  image: string;
  date: string;
  dateShort: string;
  time: string;
  duration: string;
  mode: string;
  mentor: string;
  price: string;
  featured?: boolean;
};

export const workshops = content.workshops as Workshop[];
export const featuredWorkshop = workshops.find((workshop) => workshop.featured) ?? workshops[0];
