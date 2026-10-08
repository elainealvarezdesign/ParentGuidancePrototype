import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, ButtonAnchor, ButtonLink } from "./Button";
import { ArrowRight, Download } from "./icons";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    docs: { description: { component: "Actions and button-styled links. Guidance: docs/system/components/button.md" } },
  },
  args: { children: "View answer", variant: "primary", size: "m", disabled: false, loading: false },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary", "tertiary", "inverse", "inverse-secondary"] },
    size: { control: "inline-radio", options: ["s", "m", "l"] },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3 rounded-pg-xl bg-pg-navy p-6">
        <Button variant="inverse">Inverse</Button>
        <Button variant="inverse-secondary">Inverse secondary</Button>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="s">Small 36</Button>
      <Button size="m">Medium 44</Button>
      <Button size="l">Large 52</Button>
    </div>
  ),
};

export const WithIconsAndLinks: Story = {
  name: "Icons, links and anchors",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <ButtonLink to="/parent-coaching">
        Get Started <ArrowRight size={16} aria-hidden="true" />
      </ButtonLink>
      <Button variant="secondary">
        <Download size={16} aria-hidden="true" /> Download
      </Button>
      <ButtonAnchor href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer" variant="secondary">
        Visit website<span className="sr-only"> (opens in a new tab)</span>
      </ButtonAnchor>
    </div>
  ),
};
