import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MediaPlayer } from "./MediaPlayer";
import { Dialog } from "./Dialog";
import { Button } from "./Button";
import { MessageCircle } from "./icons";
import poster from "@/imports/get-help-hero.png";

/* MediaPlayer (docs/system/components/media-player.md) and Dialog (docs/system/components/dialog.md). */
const meta: Meta = { title: "UI/Media & overlays" };
export default meta;
type Story = StoryObj;

export const Player: Story = {
  render: () => (
    <div className="max-w-2xl">
      <MediaPlayer poster={poster} duration="4:12" title="Introduction to Milestones to Progress" />
    </div>
  ),
};

export const PlayerAmber: Story = {
  name: "Player (lesson accent)",
  render: () => (
    <div className="max-w-2xl">
      <MediaPlayer poster={poster} duration="11:19" title="The 4 Questions" accent="amber" />
    </div>
  ),
};

export const DialogStory: Story = {
  name: "Dialog",
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Ask a Therapist"
          description="Licensed therapists respond within 48 hours"
          icon={<MessageCircle />}
        >
          <div className="flex flex-col gap-4 p-6 md:p-8">
            <p className="text-sm text-pg-slate">
              Dialog content goes here. Tab stays inside; Escape closes and focus returns to the button.
            </p>
            <Button onClick={() => setOpen(false)}>Done</Button>
          </div>
        </Dialog>
      </>
    );
  },
};
