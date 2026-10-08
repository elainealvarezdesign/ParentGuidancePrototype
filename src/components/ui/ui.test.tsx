import { useState } from "react";
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Field, Select, TextInput } from "./Field";
import { SearchField } from "./SearchField";
import { FilterChips } from "./FilterChips";
import { AccordionItem } from "./Accordion";
import { Tabs } from "./Tabs";
import { Dialog } from "./Dialog";
import { MediaPlayer } from "./MediaPlayer";
import { Pagination } from "./Pagination";
import { RichText } from "./RichText";
import { Button } from "./Button";

describe("Field (audit H02)", () => {
  it("labels the control and ties hint and error to it", () => {
    render(
      <Field label="Email" hint="We only reply by email" error="Enter a valid email address." required>
        <TextInput type="email" />
      </Field>,
    );
    const input = screen.getByRole("textbox", { name: /email/i });
    expect(input).toBeRequired();
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription(/we only reply by email.*enter a valid email address/i);
  });

  it("names a compact select with aria-label (audit H07)", () => {
    render(
      <Select size="compact" aria-label="Sort questions" defaultValue="az">
        <option value="featured">Featured</option>
        <option value="az">A–Z</option>
      </Select>,
    );
    expect(screen.getByRole("combobox", { name: "Sort questions" })).toHaveValue("az");
  });
});

describe("SearchField (audit H03, H05)", () => {
  function Harness() {
    const [q, setQ] = useState("");
    return <SearchField label="Search questions" placeholder="Search…" value={q} onValueChange={setQ} />;
  }
  it("has a permanent name and a named clear button", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    const input = screen.getByRole("searchbox", { name: "Search questions" });
    expect(screen.queryByRole("button", { name: "Clear search" })).not.toBeInTheDocument();
    await user.type(input, "adhd");
    await user.click(screen.getByRole("button", { name: "Clear search" }));
    expect(input).toHaveValue("");
  });
});

describe("FilterChips", () => {
  it("is a labelled group of toggle buttons", async () => {
    const user = userEvent.setup();
    function Harness() {
      const [v, setV] = useState<"All" | "ADHD">("All");
      return <FilterChips label="Filter by category" options={["All", "ADHD"] as const} value={v} onChange={setV} />;
    }
    render(<Harness />);
    expect(screen.getByRole("group", { name: "Filter by category" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "ADHD" }));
    expect(screen.getByRole("button", { name: "ADHD" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "false");
  });
});

describe("AccordionItem", () => {
  it("toggles aria-expanded and controls a labelled region", async () => {
    const user = userEvent.setup();
    render(<AccordionItem title="Is messaging limited?">Answer text</AccordionItem>);
    const button = screen.getByRole("button", { name: "Is messaging limited?" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("region", { name: "Is messaging limited?" })).toHaveTextContent("Answer text");
  });
});

describe("Tabs", () => {
  it("moves selection with the arrow keys", async () => {
    const user = userEvent.setup();
    function Harness() {
      const [v, setV] = useState<"a" | "b">("a");
      return (
        <Tabs
          label="Lesson content"
          value={v}
          onChange={setV}
          tabs={[
            { id: "a", label: "Overview", panel: <p>One</p> },
            { id: "b", label: "Resources", panel: <p>Two</p> },
          ]}
        />
      );
    }
    render(<Harness />);
    const first = screen.getByRole("tab", { name: "Overview" });
    first.focus();
    await user.keyboard("{ArrowRight}");
    const second = screen.getByRole("tab", { name: "Resources" });
    expect(second).toHaveAttribute("aria-selected", "true");
    expect(second).toHaveFocus();
    expect(screen.getByRole("tabpanel", { name: "Resources" })).toHaveTextContent("Two");
  });
});

describe("Dialog (audit H01)", () => {
  it("is named, takes focus, closes on Escape and returns focus", async () => {
    const user = userEvent.setup();
    function Harness() {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>Open</Button>
          <Dialog open={open} onClose={() => setOpen(false)} title="Ask a Therapist" description="Within 48 hours">
            <button type="button">Inside</button>
          </Dialog>
        </>
      );
    }
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
    render(<Harness />, { container: root });
    const trigger = screen.getByRole("button", { name: "Open" });
    await user.click(trigger);
    const dialog = screen.getByRole("dialog", { name: "Ask a Therapist" });
    expect(dialog).toHaveAccessibleDescription("Within 48 hours");
    expect(dialog).toContainElement(document.activeElement as HTMLElement);
    expect(root).toHaveAttribute("inert");
    await user.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    expect(root).not.toHaveAttribute("inert");
    expect(trigger).toHaveFocus();
    root.remove();
  });
});

describe("MediaPlayer (audit H06)", () => {
  it("has a named play button and a native seek slider", () => {
    render(<MediaPlayer poster="/p.jpg" duration="2:00" title="Routines" />);
    expect(screen.getAllByRole("button", { name: "Play video: Routines" })[0]).toBeInTheDocument();
    const seek = screen.getByRole("slider", { name: "Seek: Routines" });
    expect(seek).toHaveAttribute("aria-valuetext", "00:00 of 2:00");
    // Keyboard stepping is native to <input type="range"> (checked in the e2e suite); jsdom only fires change.
    fireEvent.change(seek, { target: { value: "120" } });
    expect(seek).toHaveAttribute("aria-valuetext", "02:00 of 2:00");
  });
});

describe("Pagination", () => {
  it("marks the current page and hides with one page", () => {
    const { rerender } = render(<Pagination page={2} totalPages={3} onChange={() => {}} label="Course pages" />);
    expect(screen.getByRole("navigation", { name: "Course pages" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Page 2" })).toHaveAttribute("aria-current", "page");
    rerender(<Pagination page={1} totalPages={1} onChange={() => {}} />);
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });
});

describe("RichText", () => {
  it("renders **bold** and _italic_ and nothing else", () => {
    const { container } = render(<RichText text="Coaches _you_ — **may be free**. <b>no</b>" />);
    expect(container.querySelector("strong")).toHaveTextContent("may be free");
    expect(container.querySelector("em")).toHaveTextContent("you");
    expect(container.querySelector("b")).toBeNull();
  });
});
