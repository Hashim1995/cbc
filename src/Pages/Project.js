import { useState } from "react";
import Style from "../Assets/Project.module.scss";
import { useParams } from "react-router-dom";
import { Image } from "antd";
import projectList from "../Assets/Img/projectList";
import { Row, Col } from "antd";
import { Descriptions, Badge } from "antd";
const Project = () => {
  const { projectSlug } = useParams();
  const [visible, setVisible] = useState(false);

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
    status,
  } = projectList.find((project) => project.title === projectSlug);

  return (
    <div className="container">
      <div className={Style.wrap}>
        <div className={Style.imgWrap}>
          <Image.PreviewGroup>
            <Image
              width={"100%"}
              height={700}
              style={{ objectFit: "contain" }}
              src={previewImg}
            />
            {imgList.map((img, i) => (
              <Row>
                <Col md={8} xs={12} lg={6}>
                  <Image
                    width={200}
                    key={i}
                    preview={{ visible: true }}
                    src={img}
                  />
                </Col>
              </Row>
            ))}
          </Image.PreviewGroup>
        </div>
        <Descriptions
          size={"middle"}
          bordered={true}
          title="About Project"
          layout="vertical"
        >
          {title && (
            <Descriptions.Item label="Project Name">{title}</Descriptions.Item>
          )}
          {client && (
            <Descriptions.Item label="Client">{client}</Descriptions.Item>
          )}
          {location && (
            <Descriptions.Item label="Location">{location}</Descriptions.Item>
          )}
          {budget && (
            <Descriptions.Item label="Budget">{budget}</Descriptions.Item>
          )}
          <Descriptions.Item label="Duration" span={2}>
            {duration}
          </Descriptions.Item>
          {status && (
            <Descriptions.Item label="Status" span={3}>
              <Badge status="processing" text={status} />
            </Descriptions.Item>
          )}
          {desciption && (
            <Descriptions.Item label="Description">
              {desciption}
            </Descriptions.Item>
          )}
        </Descriptions>
      </div>
    </div>
  );
};

export default Project;
