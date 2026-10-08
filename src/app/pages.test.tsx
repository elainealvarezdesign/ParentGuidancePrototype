import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import QuestionDetailPage from "./QuestionDetailPage";
import LessonPage from "./LessonPage";
import CoursePage from "./CoursePage";
import ContactUsPage from "./ContactUsPage";
import AskATherapistPage from "./AskATherapistPage";
import { questions } from "@/content/askATherapist";

function at(path: string, routes: { path: string; Component: React.ComponentType }[]) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
  return router;
}

describe("detail pages never fall back to another item (audit M04)", () => {
  it("shows not found for an unknown question", () => {
    at("/ask-a-therapist/999", [{ path: "/ask-a-therapist/:questionId", Component: QuestionDetailPage }]);
    expect(screen.getByRole("heading", { level: 1, name: "We couldn't find that answer" })).toBeInTheDocument();
  });
  it("shows not found for an unknown lesson or course", () => {
    at("/courses/milestones-to-progress/lesson/99", [
      { path: "/courses/:courseSlug/lesson/:lessonId", Component: LessonPage },
    ]);
    expect(screen.getByRole("heading", { level: 1, name: "We couldn't find that lesson" })).toBeInTheDocument();
  });
  it("shows not found for an unknown course", () => {
    at("/courses/nope", [{ path: "/courses/:courseSlug", Component: CoursePage }]);
    expect(screen.getByRole("heading", { level: 1, name: "We couldn't find that course" })).toBeInTheDocument();
  });
});

describe("answer page", () => {
  it("renders the requested question and resets state when the route changes (audit M03)", async () => {
    const router = at(`/ask-a-therapist/${questions[0].id}`, [
      { path: "/ask-a-therapist/:questionId", Component: QuestionDetailPage },
    ]);
    expect(screen.getByRole("heading", { level: 1, name: questions[0].question })).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Read Transcript" }));
    expect(screen.getByRole("button", { name: "Read Transcript" })).toHaveAttribute("aria-expanded", "true");
    await router.navigate(`/ask-a-therapist/${questions[1].id}`);
    expect(await screen.findByRole("heading", { level: 1, name: questions[1].question })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Read Transcript" })).toHaveAttribute("aria-expanded", "false");
  });
});

describe("Ask a Therapist list", () => {
  it("filters by search and category, announces the count and sorts with a native select (H05, H07)", async () => {
    const user = userEvent.setup();
    at("/ask-a-therapist", [{ path: "/ask-a-therapist", Component: AskATherapistPage }]);
    await user.click(screen.getByRole("button", { name: "ADHD" }));
    const adhd = questions.filter((q) => q.category === "ADHD").length;
    expect(screen.getByRole("status")).toHaveTextContent(`${adhd} questions found`);
    await user.type(screen.getByRole("searchbox", { name: "Search questions" }), "routine");
    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(screen.getByRole("combobox", { name: "Sort questions" })).toHaveValue("featured");
  });
});

describe("Contact Us form", () => {
  it("ties errors to fields and replaces the form with a focused success message", async () => {
    const user = userEvent.setup();
    at("/contact-us", [{ path: "/contact-us", Component: ContactUsPage }]);
    await user.click(screen.getByRole("button", { name: "Send message" }));
    expect(screen.getByRole("textbox", { name: /full name/i })).toHaveFocus();
    expect(screen.getByRole("textbox", { name: /full name/i })).toHaveAccessibleDescription("Enter your name.");
    await user.type(screen.getByRole("textbox", { name: /full name/i }), "Ana");
    await user.type(screen.getByRole("textbox", { name: /^email/i }), "ana@example.com");
    await user.type(screen.getByRole("textbox", { name: /how can we help/i }), "Hello");
    await user.click(screen.getByRole("button", { name: "Send message" }));
    expect(screen.getByRole("heading", { name: "Message sent" })).toHaveFocus();
  });
});
