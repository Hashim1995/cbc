import React from "react";
import AboutUs from "../Components/AboutUs/AboutUs";
import Stats from "../Components/Stats/Stats";
const About = () => {
  document.body.scrollTop = 0;
  return (
    <div>
      <AboutUs />
      <Stats />
    </div>
  );
};

export default About;
