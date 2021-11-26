import React from "react";
import { useParams } from "react-router-dom";
import projectList from "../Assets/Img/projectList";
const Project = () => {
  const { projectSlug } = useParams();
  console.log(projectSlug);

  const {
    id,
    imgList,
    title,
    desciption,
    previewImg,
    client,
    location,
    budget,
    duration,
  } = projectList.find((project) => project.title === projectSlug);

  return <div>{title}</div>;
};

export default Project;
