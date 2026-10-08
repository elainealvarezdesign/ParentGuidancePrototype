import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterChips } from "./FilterChips";

const options = ["All", "Anxiety", "ADHD", "Emotions", "Behavior", "Family", "Screen Time"] as const;

const meta = {
  title: "UI/FilterChips",
  component: FilterChips,
  parameters: {
    docs: {
      description: {
        component: "Single-choice pill filters (aria-pressed). Guidance: docs/system/components/filter-chips.md",
      },
    },
  },
  args: { label: "Filter by category", options, value: "All", onChange: () => {} },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return <FilterChips {...args} value={value} onChange={setValue} />;
  },
} satisfies Meta<typeof FilterChips<(typeof options)[number]>>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithCounts: Story = { args: { renderLabel: (o: string) => (o === "All" ? o : `${o} (3)`) } };
export const Narrow: Story = {
  parameters: { viewport: { defaultViewport: "mobile" } },
  globals: { viewport: { value: "mobile" } },
};
