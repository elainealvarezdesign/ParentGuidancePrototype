import type { ReactElement } from "react";
import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";

/** Renders `ui` at `path` inside a memory router (for components that use Link or route params). */
export function renderWithRouter(
  ui: ReactElement,
  { path = "/", route = "/" }: { path?: string; route?: string } = {},
) {
  const router = createMemoryRouter([{ path: route, element: ui }], { initialEntries: [path] });
  return render(<RouterProvider router={router} />);
}
