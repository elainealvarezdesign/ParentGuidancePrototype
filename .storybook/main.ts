import type { StorybookConfig } from "@storybook/react-vite";

/* Storybook: the visual catalog of the design system (docs/system/storybook.md).
 * Reuses vite.config.ts (Tailwind, the @ alias); stories live next to their component as *.stories.tsx. */
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: { name: "@storybook/react-vite", options: {} },
  staticDirs: [],
  core: { disableTelemetry: true },
  viteFinal: async (config) => {
    // The app's manual vendor chunks don't apply to Storybook's own build.
    if (config.build?.rollupOptions?.output && !Array.isArray(config.build.rollupOptions.output)) {
      delete config.build.rollupOptions.output.manualChunks;
    }
    return config;
  },
};

export default config;
