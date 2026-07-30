import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// If you have a root App component, import it here, or create a simple placeholder below:
// import App from './App';

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <div>Hello from Build Me Web</div>
    </StrictMode>,
  );
}
