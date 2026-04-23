import { createRoot } from "react-dom/client";
import "@styles/globals.css";
import App from "@/App.tsx";

// ! is used to assert that the value is not null or undefined
createRoot(document.getElementById("root")!).render(<App />);
