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

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const MONTH_INDEX: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

function workshopDateKey(date: string): number {
  const match = date.match(/^(\d{1,2})\s+([a-z]+)\s+(\d{4})$/i);
  if (!match) return Number.NaN;

  const [, day, month, year] = match;
  const monthIndex = MONTH_INDEX[month.toLowerCase()];
  if (monthIndex === undefined) return Number.NaN;

  return Date.UTC(Number(year), monthIndex, Number(day));
}

export function getWorkshopsWithinNextSevenDays(now = new Date()): Workshop[] {
  const todayParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const year = Number(todayParts.find((part) => part.type === "year")?.value);
  const month = Number(todayParts.find((part) => part.type === "month")?.value);
  const day = Number(todayParts.find((part) => part.type === "day")?.value);
  const today = Date.UTC(year, month - 1, day);
  const endExclusive = today + 7 * DAY_IN_MS;

  return workshops
    .filter((workshop) => {
      const workshopDay = workshopDateKey(workshop.date);
      return workshopDay >= today && workshopDay < endExclusive;
    })
    .sort((a, b) => workshopDateKey(a.date) - workshopDateKey(b.date));
}
