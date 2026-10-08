import { describe, expect, it } from "vitest";
import { searchIndex, searchPage } from "@/content/search";
import { searchSite } from "./search";

describe("site search", () => {
  it("finds content from across the site, title matches first", () => {
    const results = searchSite("anxiety", searchIndex);
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].title.toLowerCase()).toContain("anxiety");
  });

  it("requires every word, ignores case and accents, and returns nothing for an empty query", () => {
    expect(searchSite("ANXIETY zzzz", searchIndex)).toEqual([]);
    expect(searchSite("   ", searchIndex)).toEqual([]);
    expect(searchSite("espanol", searchIndex).length).toBe(searchSite("español", searchIndex).length);
  });

  it("every suggested topic has results and every entry has one destination", () => {
    for (const word of searchPage.suggestions) expect(searchSite(word, searchIndex).length, word).toBeGreaterThan(0);
    for (const e of searchIndex) expect(Boolean(e.to) !== Boolean(e.href), e.title).toBe(true);
  });
});
