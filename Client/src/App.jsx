import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// PAGES
import Register from "./Pages/Register";
import Login from "./Pages/Login";

import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
// Auth

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
