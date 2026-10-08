import type { SearchEntry } from "@/content/search";

/** Case- and accent-insensitive search over the site index. Every word of the query must appear in the title,
 * description or keywords; matches in the title rank first. */
export function searchSite(query: string, index: SearchEntry[]): SearchEntry[] {
  const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const words = fold(query).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  return index
    .map((entry) => {
      const title = fold(entry.title);
      const body = fold([entry.description, ...(entry.keywords ?? [])].join(" "));
      if (!words.every((w) => title.includes(w) || body.includes(w))) return null;
      const score = words.reduce((n, w) => n + (title.includes(w) ? 2 : 1), 0);
      return { entry, score };
    })
    .filter((r): r is { entry: SearchEntry; score: number } => r !== null)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.entry);
}
