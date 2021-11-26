import React from "react";
import { useParams } from "react-router-dom";
import serviceList from "../../../Assets/Img/serviceList";
const Service = () => {
  const { serviceSlug } = useParams();

  const { img, title, description, icon } = serviceList.find(
    (service) => service.title === serviceSlug
  );

  return <div>{title}</div>;
};

export default Service;
