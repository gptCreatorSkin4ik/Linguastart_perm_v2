import { ResourceType } from "@/types";

export const resourceTypeLabels: Record<ResourceType, string> = {
  rutube: "RuTube",
  site: "Сайт",
  dictionary: "Словарь",
  practice: "Практика",
};

export function formatDate(isoDate: string): string {
  try {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(isoDate));
  } catch {
    return isoDate;
  }
}

export function toPercent(value: number): string {
  return `${Math.round(value)}%`;
}
