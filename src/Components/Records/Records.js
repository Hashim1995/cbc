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
      <div className="container" id="records">
        <div className={Style.wrap}>
          <div className={Style.title}>
            <h1>
              ABOUT <b>WEMBLY</b>
            </h1>
            <p>
              Wembly is providing best facility management services to its
              clients since past 4 decades.
            </p>
          </div>
          <Row>
            <Col xs={24} md={12} xl={8}>
              <div className={Style.item}>
                <Link to="/About">OUR STORY</Link>
                <p>
                  Wembly started its venture into facility management service
                  since 1980's. And we initially started with serving Hotels and
                  Tourism sectors and from 2000 we expanded to serve commercial
                  centers, Oil and Gas, Education and other sectors.
                </p>{" "}
                <Link className={Style.readMore} to="/About">
                  Read More
                </Link>
                <ManageSearchRoundedIcon />
              </div>
            </Col>
            <Col xs={24} md={12} xl={8}>
              <div className={Style.item}>
                <Link to="/About">ABOUT US</Link>
                <p>
                  Wembly is in facility management that allows the businesses to
                  focus on their core business which are the primary activity of
                  the organization. Wembly ensures productive and safe
                  environment for the organization's employees, customers and
                  visitors.
                </p>

                <Link className={Style.readMore} to="/About">
                  Read More
                </Link>

                <GroupsOutlinedIcon />
              </div>
            </Col>
            <Col
              md={{ span: 12, offset: 6 }}
              xs={24}
              xl={{ span: 8, offset: 0 }}
            >
              <div className={Style.item}>
                <Link to="/About">OUR CERTIFACATE</Link>
                <p
                  style={{
                    display: "flex",
                    alignItems: "space-around",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <span> * Pestcontrol</span>
                  <span>* Construction control</span>
                  <span> * Fire and Safety.</span>
                </p>
                <Link className={Style.readMore} to="/About">
                  Read More
                </Link>
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
