import type { ComponentType } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import { MotionConfig } from "motion/react";
import { PageShell } from "@/components/layout/PageShell";
import { RouteError } from "./RouteError";

// Each page is its own chunk, loaded when its route is first visited.
const page = (load: () => Promise<{ default: ComponentType }>) => async () => ({ Component: (await load()).default });

/* Routes. Every page renders inside <PageShell> (skip link, navbar, <main>, footer).
 * To add a page: create it in src/app, compose it from src/sections, add its content in src/content,
 * and register the route here (docs/system/README.md → "Build a page"). */
const router = createBrowserRouter([
  {
    path: "/",
    Component: PageShell,
    // Nothing to show while the first page chunk loads (the HTML is empty until then).
    HydrateFallback: () => null,
    errorElement: <RouteError />,
    children: [
      { index: true, lazy: page(() => import("./HomePage")) },
      { path: "home-v1", lazy: page(() => import("./HomePageV1")) },
      { path: "home-v2", lazy: page(() => import("./HomePageV2")) },
      { path: "mental-health-series", lazy: page(() => import("./MentalHealthSeriesPage")) },
      { path: "mental-health-series/events", lazy: page(() => import("./MentalHealthEventsPage")) },
      { path: "mental-health-series/:slug", lazy: page(() => import("./MentalHealthTopicPage")) },
      { path: "parent-coaching", lazy: page(() => import("./ParentCoachingPage")) },
      { path: "on-demand-courses", lazy: page(() => import("./OnDemandCoursesPage")) },
      { path: "ask-a-therapist", lazy: page(() => import("./AskATherapistPage")) },
      { path: "ask-a-therapist/:questionId", lazy: page(() => import("./QuestionDetailPage")) },
      { path: "get-help", lazy: page(() => import("./GetHelpPage")) },
      { path: "cookies-policy", lazy: page(() => import("./CookiesPolicyPage")) },
      { path: "terms-of-use", lazy: page(() => import("./TermsOfUsePage")) },
      { path: "consent-documents", lazy: page(() => import("./ConsentDocumentsPage")) },
      { path: "contact-us", lazy: page(() => import("./ContactUsPage")) },
      { path: "search", lazy: page(() => import("./SearchPage")) },
      { path: "courses/:courseSlug", lazy: page(() => import("./CoursePage")) },
      { path: "courses/:courseSlug/lesson/:lessonId", lazy: page(() => import("./LessonPage")) },
      { path: "*", lazy: page(() => import("./NotFoundPage")) },
    ],
  },
]);

export default function App() {
  // reducedMotion="user": with the system setting on, motion turns off movement and scaling (opacity remains).
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  );
}
