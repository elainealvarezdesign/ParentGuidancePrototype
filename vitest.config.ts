import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

// Unit and component tests (see CONTRIBUTING.md → Tests): every src/**/*.test.ts(x) file.
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      setupFiles: ["./src/test/setup.ts"],
      include: ["src/**/*.test.{ts,tsx}"],
      css: false,
    },
  }),
);
