import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import Diffirence from "../Components/Diffirence/Diffirence";
import Records from "../Components/Records/Records";
import Services from "../Components/Services/Services";
import Projects from "../Components/Projects/Projects";
const Home = () => {
  return (
    <div>
      <Carousel />
      <Diffirence />
      <Records />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;
