import Style from "./Services.module.scss";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import carouselItems from "../../Assets/Img/serviceList";
import { Link } from "react-router-dom";
import Divider from "antd/lib/divider";
const Services = () => {
  return (
    <div className="container">
      <section className={Style.wrap}>
        <h1>OUR SERVICES</h1>
        <Divider />
        <Row>
          {carouselItems.map((item, index) => (
            <Col key={index} xs={24} sm={12} lg={8} xl={6}>
              <Link to={item.title}>
                <div className={Style.item}>
                  {item.icon}
                  <h2>{item.title}</h2>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Services;
