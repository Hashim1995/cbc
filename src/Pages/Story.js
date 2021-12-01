import React from "react";
import OurStory from "../Components/OurStory/OurStory";
import Stats from "../Components/Stats/Stats";
const Story = () => {
  document.body.scrollTop = 0;
  return (
    <div>
      <OurStory />
      <Stats />
    </div>
  );
};

export default Story;
