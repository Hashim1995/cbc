import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import Diffirence from "../Components/Diffirence/Diffirence";
import Records from "../Components/Records/Records";
import Services from "../Components/Services/Services";
const Home = () => {
  return (
    <div>
      <Carousel />
      <Diffirence />
      <Records />
      <Services />
    </div>
  );
};

export default Home;
