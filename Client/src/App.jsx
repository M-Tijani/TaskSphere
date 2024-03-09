import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// PAGES
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
