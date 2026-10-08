import type { ComponentType } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Route, Routes } from "react-router";
import HomePage from "@/app/HomePage";
import AskATherapistPage from "@/app/AskATherapistPage";
import QuestionDetailPage from "@/app/QuestionDetailPage";
import OnDemandCoursesPage from "@/app/OnDemandCoursesPage";
import CoursePage from "@/app/CoursePage";
import LessonPage from "@/app/LessonPage";
import ParentCoachingPage from "@/app/ParentCoachingPage";
import GetHelpPage from "@/app/GetHelpPage";
import ContactUsPage from "@/app/ContactUsPage";
import MentalHealthSeriesPage from "@/app/MentalHealthSeriesPage";
import MentalHealthEventsPage from "@/app/MentalHealthEventsPage";
import MentalHealthTopicPage from "@/app/MentalHealthTopicPage";
import NotFoundPage from "@/app/NotFoundPage";
import SearchPage from "@/app/SearchPage";

/* Whole pages as the site renders them (without the navbar and footer of PageShell).
 * Each page is only a list of sections fed with content; recipes in docs/system/pages/. */
const meta: Meta = { title: "Pages/All pages", parameters: { layout: "fullscreen" } };
export default meta;
type Story = StoryObj;

const page = (path: string, pattern: string, Component: ComponentType): Story => ({
  parameters: { route: path },
  render: () => (
    <Routes>
      <Route path={pattern} element={<Component />} />
    </Routes>
  ),
});

export const Home = page("/", "/", HomePage);
export const AskATherapist = page("/ask-a-therapist", "/ask-a-therapist", AskATherapistPage);
export const Answer = page("/ask-a-therapist/3", "/ask-a-therapist/:questionId", QuestionDetailPage);
export const OnDemandCourses = page("/on-demand-courses", "/on-demand-courses", OnDemandCoursesPage);
export const Course = page("/courses/milestones-to-progress", "/courses/:courseSlug", CoursePage);
export const Lesson = page(
  "/courses/milestones-to-progress/lesson/2",
  "/courses/:courseSlug/lesson/:lessonId",
  LessonPage,
);
export const ParentCoaching = page("/parent-coaching", "/parent-coaching", ParentCoachingPage);
export const GetHelp = page("/get-help", "/get-help", GetHelpPage);
export const ContactUs = page("/contact-us", "/contact-us", ContactUsPage);
export const MentalHealthSeries = page("/mental-health-series", "/mental-health-series", MentalHealthSeriesPage);
export const Events = page("/mental-health-series/events", "/mental-health-series/events", MentalHealthEventsPage);
export const Topic = page(
  "/mental-health-series/building-your-childs-confidence",
  "/mental-health-series/:slug",
  MentalHealthTopicPage,
);
export const NotFound = page("/missing", "*", NotFoundPage);

export const Search = page("/search?q=anxiety", "/search", SearchPage);
