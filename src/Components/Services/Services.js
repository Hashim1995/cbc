import Style from "./Services.module.scss";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import carouselItems from "../../Assets/Img/serviceList";
import Divider from "antd/lib/divider";
const Services = () => {
  return (
    <div className={Style.main} id="service">
      <div className="container">
        <section className={Style.wrap}>
          <h1>
            OUR <b>SERVICES</b>
          </h1>
          <Divider className={Style.divider} />
          <Row>
            {carouselItems.map((item, index) => (
              <Col key={index} xs={12} sm={12} lg={8} xl={6}>
                {/* <Link to={`/service/${item.title}`}> */}
                <div className={Style.item}>
                  {item.icon}
                  <h2>{item.title}</h2>
                </div>
                {/* </Link> */}
              </Col>
            ))}
          </Row>
        </section>
      </div>
    </div>
  );
};

export default Services;
