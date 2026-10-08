import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/* Every route passes axe (WCAG 2.1 A/AA) and keeps the page frame: one <main>, one <h1>, no horizontal
 * scroll. Remote placeholder images may fail to load offline; that does not affect these checks. */

const routes = [
  "/",
  "/mental-health-series/events",
  "/mental-health-series/building-your-childs-confidence",
  "/parent-coaching",
  "/on-demand-courses",
  "/courses/milestones-to-progress",
  "/courses/free-yourself-from-limiting-thoughts/lesson/2",
  "/ask-a-therapist",
  "/ask-a-therapist/3",
  "/get-help",
  "/contact-us",
  "/terms-of-use",
  "/cookies-policy",
  "/consent-documents",
  "/this-page-does-not-exist",
];

/** Scroll through the page so scroll-triggered entrances run, then wait until no element is mid-fade
 * (a half-transparent element would be reported as low contrast). */
async function settle(page: Page) {
  await page.evaluate(async () => {
    for (let y = 0; y <= document.body.scrollHeight; y += 300) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 30));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForFunction(
    () =>
      document
        .getAnimations()
        .every((a) => a.playState !== "running" || a.effect?.getTiming().iterations === Infinity) &&
      [...document.querySelectorAll<HTMLElement>("[style*='opacity']")]
        .filter((el) => !el.closest("[hidden]"))
        .every((el) => getComputedStyle(el).opacity === "1"),
    undefined,
    { timeout: 5000 },
  );
}

async function expectAccessible(page: Page) {
  await settle(page);
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  const summary = results.violations.map(
    (v) =>
      `${v.id} (${v.impact}): ${v.nodes
        .map((n) => n.target.join(" "))
        .slice(0, 3)
        .join(" | ")}`,
  );
  expect(summary, summary.join("\n")).toEqual([]);
}

async function expectFrame(page: Page) {
  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveCount(1);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow, "horizontal scroll").toBe(false);
}

test.use({ reducedMotion: "reduce" });

for (const route of routes) {
  test(`${route} is accessible`, async ({ page }) => {
    await page.goto(route);
    await page.waitForLoadState("domcontentloaded");
    await expect(page.locator("h1")).toBeVisible();
    await expectFrame(page);
    await expectAccessible(page);
  });
}

test("Mental Health Series: gate, then the series home", async ({ page }) => {
  await page.goto("/mental-health-series");
  await expectAccessible(page);
  await page.getByLabel("State").selectOption("Utah");
  await page.getByLabel("School district").selectOption({ index: 1 });
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Welcome to the");
  await expectFrame(page);
  await expectAccessible(page);
});
