import React from "react";
import { useParams } from "react-router-dom";
import serviceList from "../Assets/Img/serviceList";
import Style from "../Assets/Service.module.scss";
import { Row, Col } from "antd";
const Service = () => {
  const { serviceSlug } = useParams();
  const { img, img2, title, description2, description, icon } =
    serviceList.find((service) => service.title === serviceSlug);

  return (
    <div className="container">
      <div className={Style.wrap}>
        <h1>
          {title} {icon}
        </h1>

        <Row>
          <Col xs={24} xl={12}>
            <img src={img} style={{ width: "100%" }} alt="" />
          </Col>
          <Col xs={24} xl={12}>
            <p className={Style.rightText}>{description2}</p>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col xs={24} xl={12}>
            <p className={Style.leftText}>{description}</p>
          </Col>
          <Col xs={24} xl={12}>
            <img src={img2} style={{ width: "100%" }} alt="" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Service;
