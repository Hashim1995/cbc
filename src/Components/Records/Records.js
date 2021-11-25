import Style from "./Records.module.scss";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { Link } from "react-router-dom";
const Records = () => {
  return (
    <div className={Style.main}>
      <div className="container">
        <div className={Style.wrap}>
          <div className={Style.title}>
            <h1>
              ABOUT <b>SIMPLY</b>
            </h1>
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire
            </p>
          </div>
          <Row>
            <Col xs={24} md={12} xl={8}>
              <div className={Style.item}>
                <Link to="/">TOP RATED</Link>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire by the charms
                  of pleasure of the moment, so blinded by desire
                </p>
                <button>Read More</button>
              </div>
            </Col>
            <Col xs={24} md={12} xl={8}>
              <div className={Style.item}>
                <Link to="/">LOW COST</Link>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire by the charms
                  of pleasure of the moment, so blinded by desire
                </p>
                <button>Read More</button>
              </div>
            </Col>
            <Col
              md={{ span: 12, offset: 6 }}
              xs={24}
              xl={{ span: 8, offset: 0 }}
            >
              <div className={Style.item}>
                <Link to="/">QUALITY</Link>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire by the charms
                  of pleasure of the moment, so blinded by desire
                </p>
                <button>Read More</button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Records;
