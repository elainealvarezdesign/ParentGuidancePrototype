import type { Preview } from "@storybook/react-vite";
import { MotionConfig } from "motion/react";
import { StyledEngineProvider } from "@mui/material/styles";
import { MemoryRouter } from "react-router";
import "../src/styles/index.css";

const preview: Preview = {
  decorators: [
    (Story, { parameters }) => (
      <StyledEngineProvider enableCssLayer>
        <MotionConfig reducedMotion="user">
          <MemoryRouter initialEntries={[parameters.route ?? "/"]}>
            <Story />
          </MemoryRouter>
        </MotionConfig>
      </StyledEngineProvider>
    ),
  ],
  parameters: {
    layout: "padded",
    controls: { expanded: true, matchers: { color: /(background|color)$/i } },
    backgrounds: {
      options: {
        cream: { name: "Cream (page)", value: "#f9f4f1" },
        white: { name: "White", value: "#ffffff" },
        tint: { name: "Tint soft", value: "#f0f6f6" },
        navy: { name: "Navy", value: "#1c3243" },
        sage: { name: "Sage", value: "#90b3b6" },
      },
    },
    viewport: {
      options: {
        mobile: { name: "Mobile 375", styles: { width: "375px", height: "812px" } },
        tablet: { name: "Tablet 768", styles: { width: "768px", height: "1024px" } },
        desktop: { name: "Desktop 1280", styles: { width: "1280px", height: "900px" } },
      },
    },
    // Accessibility panel (axe): violations fail the story's a11y check.
    a11y: { test: "error" },
    options: {
      storySort: { order: ["Introduction", "Foundations", "UI", "Cards", "Patterns", "Layout", "Sections", "Pages"] },
    },
  },
  initialGlobals: { backgrounds: { value: "cream" } },
  tags: ["autodocs"],
};

export default preview;
