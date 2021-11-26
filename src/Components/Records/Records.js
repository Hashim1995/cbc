import Style from "./Records.module.scss";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { Link } from "react-router-dom";
import ManageSearchRoundedIcon from "@mui/icons-material/ManageSearchRounded";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined";
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
                <Link to="/">OUR STORY</Link>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire by the charms
                  of pleasure of the moment, so blinded by desire
                </p>
                <button>Read More</button>
                <ManageSearchRoundedIcon />
              </div>
            </Col>
            <Col xs={24} md={12} xl={8}>
              <div className={Style.item}>
                <Link to="/">ABOUT US</Link>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire by the charms
                  of pleasure of the moment, so blinded by desire
                </p>
                <button>Read More</button>
                <GroupsOutlinedIcon />
              </div>
            </Col>
            <Col
              md={{ span: 12, offset: 6 }}
              xs={24}
              xl={{ span: 8, offset: 0 }}
            >
              <div className={Style.item}>
                <Link to="/">OUR CERTIFACATE</Link>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire by the charms
                  of pleasure of the moment, so blinded by desire
                </p>
                <button>Read More</button>
                <CardMembershipOutlinedIcon />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Records;
