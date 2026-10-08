import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SubmitQuestionDialog } from "./SubmitQuestionDialog";

describe("SubmitQuestionDialog (audit H01, H02, M06)", () => {
  it("validates, focuses the first error, then shows a focused success message", async () => {
    const user = userEvent.setup();
    render(<SubmitQuestionDialog open onClose={() => {}} />);

    await user.click(screen.getByRole("button", { name: "Submit Question" }));
    const question = screen.getByRole("textbox", { name: /your question/i });
    expect(question).toHaveAttribute("aria-invalid", "true");
    expect(question).toHaveAccessibleDescription("Write your question.");
    expect(question).toHaveFocus();

    await user.type(question, "How do I help with homework?");
    await user.type(screen.getByRole("textbox", { name: /^email/i }), "not-an-email");
    await user.click(screen.getByRole("button", { name: "Submit Question" }));
    expect(screen.getByRole("textbox", { name: /^email/i })).toHaveFocus();

    await user.clear(screen.getByRole("textbox", { name: /^email/i }));
    await user.type(screen.getByRole("textbox", { name: /^email/i }), "parent@example.com");
    await user.click(screen.getByRole("button", { name: "Submit Question" }));
    expect(screen.getByRole("heading", { name: "Question submitted" })).toHaveFocus();
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
