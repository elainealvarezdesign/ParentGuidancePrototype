import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";
import { Avatar, PersonLine } from "./Avatar";
import { CrisisNotice, Notice } from "./Notice";
import { SuccessMessage } from "./SuccessMessage";
import { Button } from "./Button";
import { PlayCircle } from "./icons";

/* Small display components: Badge, Avatar, Notice, SuccessMessage. Guidance: docs/system/components/. */
const meta: Meta = { title: "UI/Labels & messages" };
export default meta;
type Story = StoryObj;

export const Badges: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {(["navy", "teal", "tint", "cream", "success", "warning", "error"] as const).map((t) => (
          <Badge key={t} tone={t}>
            {t}
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge tone="teal" shape="label">
          Latest Answer
        </Badge>
        <Badge tone="tint" shape="label">
          ADHD
        </Badge>
        <Badge tone="tint" icon={<PlayCircle size={16} aria-hidden="true" />}>
          Video
        </Badge>
      </div>
      <div className="flex gap-2 rounded-pg-xl bg-pg-slate p-4">
        <Badge tone="overlay">On a photo</Badge>
      </div>
    </div>
  ),
};

export const Avatars: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-end gap-3">
        {(["xs", "s", "m", "l", "xl"] as const).map((s) => (
          <Avatar key={s} name="Dr. Kevin Skinner" size={s} />
        ))}
      </div>
      <PersonLine name="Dr. Kevin Skinner" detail="Clinical Director, LMFT" />
      <div className="rounded-pg-xl bg-pg-navy p-4">
        <PersonLine name="Max Dahmen" detail="LCSW" tone="inverse" />
      </div>
    </div>
  ),
};

export const Notices: Story = {
  render: () => (
    <div className="flex max-w-xl flex-col gap-3">
      <CrisisNotice />
      <Notice tone="warning">
        <strong>Important:</strong> The content on this website does not form a therapist/patient relationship.
      </Notice>
      <Notice tone="info">All times are shown in Central Time (CT).</Notice>
      <Notice tone="success">Your preferences were saved.</Notice>
    </div>
  ),
};

export const Success: Story = {
  name: "Success message",
  render: () => (
    <div className="max-w-md rounded-pg-xl bg-white p-8 shadow-pg-card">
      <SuccessMessage title="Message sent" action={<Button>Done</Button>}>
        Thank you for reaching out. Our team will get back to you as soon as possible.
      </SuccessMessage>
    </div>
  ),
};
