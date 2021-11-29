import React from "react";
import { useParams } from "react-router-dom";
import serviceList from "../Assets/Img/serviceList";
import Style from "../Assets/Service.module.scss";
const Service = () => {
  const { serviceSlug } = useParams();
  const { img, title, description, icon } = serviceList.find(
    (service) => service.title === serviceSlug
  );

  return (
    <div className="container">
      <div className={Style.wrap}>
        <img src={img} style={{ width: "100%" }} alt="" />

        <h1>
          {title} {icon}
        </h1>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
