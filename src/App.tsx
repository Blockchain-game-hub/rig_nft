import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { AboutSection } from "./sections/AboutSection";
import { RigSection } from "./sections/RigSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<RigSection />} />
            <Route path="/about" element={<AboutSection />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
