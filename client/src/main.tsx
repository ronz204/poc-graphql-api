import "./index.css";
import { createRoot } from "react-dom/client";
import { PlaygroundPage } from "@Features/Playground/Page";
import { BrowserRouter, Routes, Route } from "react-router";

const root = document.getElementById("root")!;

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PlaygroundPage />} />
    </Routes>
  </BrowserRouter>
);
