import { createRoot } from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  // Material icon styles go into the `mui` CSS layer so Tailwind utilities can override them.
  <StyledEngineProvider enableCssLayer>
    <App />
  </StyledEngineProvider>,
);
