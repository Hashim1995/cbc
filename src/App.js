import "./Assets/global.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Story from "./Pages/Story";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Service from "./Pages/Service";
import Project from "./Pages/Project";
import { Partner } from "./Pages/Partner";
import ServicesPage from "./Pages/ServicesPage";
import ProjectsPage from "./Pages/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Story" element={<Story />} />
        <Route path="/Partner" element={<Partner />} />
        <Route path="/ServicesPage" element={<ServicesPage />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />
        <Route path="/service/:serviceSlug" element={<Service />} />
        <Route path="/project/:projectSlug" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
