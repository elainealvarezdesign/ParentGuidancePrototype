import { test, expect } from "@playwright/test";

test.use({ reducedMotion: "reduce" });

test("skip link moves focus to the main content", async ({ page }) => {
  await page.goto("/parent-coaching");
  await expect(page.locator("h1")).toBeVisible();
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
});

test("submit-question dialog traps focus and returns it (audit H01)", async ({ page }) => {
  await page.goto("/ask-a-therapist");
  const trigger = page.getByRole("button", { name: "Submit Question" });
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "Ask a Therapist" });
  await expect(dialog).toBeVisible();
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press("Tab");
    expect(await dialog.evaluate((d) => d.contains(document.activeElement))).toBe(true);
  }
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("lesson seek bar works with the keyboard (audit H06)", async ({ page }) => {
  await page.goto("/courses/milestones-to-progress/lesson/1");
  const seek = page.getByRole("slider", { name: /^Seek:/ });
  await seek.focus();
  await page.keyboard.press("End");
  await expect(seek).toHaveAttribute("aria-valuetext", /^04:12 of 4:12$/);
});

test("event pop-up opens from the calendar and closes with Escape", async ({ page }) => {
  await page.goto("/mental-health-series/events");
  const pill = page.locator('button[aria-haspopup="dialog"]:visible').first();
  await pill.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(pill).toBeFocused();
});

test("unknown answer shows not found instead of another question (audit M04)", async ({ page }) => {
  await page.goto("/ask-a-therapist/999");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("We couldn't find that answer");
});

test("home search opens the results page for the query", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("searchbox", { name: "Search resources" }).fill("anxiety");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/search\?q=anxiety$/);
  await expect(page.getByRole("status").filter({ hasText: /results? for “anxiety”/ })).toBeVisible();
  await expect(page.locator("main ul li a").first()).toBeVisible();
});

test("Help me choose links to the home FAQ", async ({ page }) => {
  await page.goto("/get-help");
  await page.getByRole("link", { name: /Help me choose/ }).click();
  await expect(page).toHaveURL(/\/#faq$/);
  await expect(page.getByRole("heading", { name: "Frequently Asked Questions" })).toBeInViewport();
});

test("route changes name the tab after the page and move focus to its heading", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/\| Parent Guidance$/);
  await page.getByRole("contentinfo").getByRole("link", { name: "Parent Coaching" }).click();
  const h1 = page.locator("main h1");
  await expect(h1).toBeFocused();
  await expect(page).toHaveTitle(`${(await h1.textContent())?.replace(/\s+/g, " ").trim()} | Parent Guidance`);
  await expect(page.getByRole("banner")).toHaveCount(1);
});
