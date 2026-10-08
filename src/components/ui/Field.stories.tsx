import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field, Select, TextArea, TextInput } from "./Field";

const meta = {
  title: "UI/Field",
  component: Field,
  parameters: {
    docs: {
      description: {
        component: "Labelled form controls with hint and error. Guidance: docs/system/components/field.md",
      },
    },
  },
  args: { label: "Email", hint: "", error: "", required: true, hideLabel: false, tone: "default", children: null },
  argTypes: { tone: { control: "inline-radio", options: ["default", "inverse", "on-sage"] } },
  render: (args) => (
    <div className="max-w-sm">
      <Field {...args} hint={args.hint || undefined} error={args.error || undefined}>
        <TextInput type="email" placeholder="your@email.com" />
      </Field>
    </div>
  ),
} satisfies Meta<typeof Field>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const WithHint: Story = { args: { label: "Your name", required: false, hint: "Optional" } };
export const WithError: Story = { args: { error: "Enter a valid email address." } };

export const Controls: Story = {
  name: "All controls",
  render: () => (
    <form className="flex max-w-md flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <Field label="Full name" required>
        <TextInput autoComplete="name" />
      </Field>
      <Field label="How can we help?" required>
        <TextArea rows={4} />
      </Field>
      <Field label="State">
        <Select defaultValue="">
          <option value="" disabled>
            Select your state
          </option>
          <option>Utah</option>
          <option>Texas</option>
        </Select>
      </Field>
      <Select size="compact" aria-label="Sort questions" defaultValue="featured">
        <option value="featured">Featured</option>
        <option value="newest">Newest</option>
        <option value="az">A–Z</option>
      </Select>
    </form>
  ),
};

export const OnSage: Story = {
  args: { tone: "on-sage", error: "Enter a valid email address.", label: "Email address" },
  parameters: { backgrounds: { value: "sage" } },
  globals: { backgrounds: { value: "sage" } },
};
