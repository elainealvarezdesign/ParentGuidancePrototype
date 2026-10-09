import { defineConfig, devices } from "@playwright/test";
import { existsSync } from "node:fs";

/* End-to-end and accessibility tests (tests/e2e). Runs against the production build (`vite preview`), or against
 * any deployed site with E2E_BASE_URL (e.g. the WordPress staging site: docs/handoff/WORDPRESS.md).
 * Locally, a preinstalled Chromium can be used with PW_CHROMIUM_PATH; CI installs Playwright's own. */
const executablePath =
  process.env.PW_CHROMIUM_PATH ??
  (existsSync("/opt/pw-browsers/chromium") && !process.env.CI ? "/opt/pw-browsers/chromium" : undefined);

const externalBaseURL = process.env.E2E_BASE_URL;

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["list"]] : "list",
  use: {
    baseURL: externalBaseURL ?? "http://localhost:4173",
    launchOptions: executablePath ? { executablePath } : {},
    trace: "retain-on-failure",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1280, height: 900 } } },
    { name: "mobile", use: { ...devices["Desktop Chrome"], viewport: { width: 375, height: 812 }, isMobile: false } },
  ],
  webServer: externalBaseURL
    ? undefined
    : {
        command: "pnpm build && pnpm preview --port 4173 --strictPort",
        url: "http://localhost:4173",
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
});
