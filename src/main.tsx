import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ListingPage from "./pages/ListingPage.tsx";
import HomePage from "./pages/HomePage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lp" element={<ListingPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
