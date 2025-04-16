import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { QuizContextProvider } from "./context/QuizContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </StrictMode>
);
