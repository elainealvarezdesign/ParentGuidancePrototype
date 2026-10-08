import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchField } from "./SearchField";
import { Button } from "./Button";

const meta = {
  title: "UI/SearchField",
  component: SearchField,
  parameters: {
    docs: {
      description: {
        component: "Labelled search with a clear button. Guidance: docs/system/components/search-field.md",
      },
    },
  },
  args: {
    label: "Search questions",
    placeholder: "Search questions…",
    value: "",
    onValueChange: () => {},
    variant: "toolbar",
  },
  argTypes: { variant: { control: "inline-radio", options: ["toolbar", "hero"] } },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return (
      <div className="max-w-xl">
        <SearchField
          {...args}
          value={value}
          onValueChange={setValue}
          action={args.variant === "hero" ? <Button size="s">Search</Button> : undefined}
        />
      </div>
    );
  },
} satisfies Meta<typeof SearchField>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Toolbar: Story = {};
export const WithText: Story = { args: { value: "anxiety" } };
export const Hero: Story = { args: { variant: "hero", label: "Search resources", placeholder: "Anxiety in Children" } };
