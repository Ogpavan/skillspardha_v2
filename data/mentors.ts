import content from "./content-data.json";

export type Mentor = {
  name: string;
  role: string;
  specialization: string;
  slug: string;
  image: string;
};

export const mentors = content.mentors as Mentor[];
