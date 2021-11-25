import Style from "./Diffirence.module.scss";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Divider from "antd/lib/divider";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
const Diffirence = () => {
  return (
    <div className={`${Style.main} `}>
      <div className={`${Style.wrap} container`}>
        <Row>
          <Col xs={24} md={12} xl={8}>
            <div className={Style.item}>
              <div className={Style.left}>
                <StarOutlinedIcon />
              </div>
              <div className={Style.right}>
                <h1>TOP RATED</h1>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled demoralized
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} xl={8}>
            <div className={Style.item}>
              <div className={Style.left}>
                <PriceCheckOutlinedIcon />
              </div>
              <div className={Style.right}>
                <h1>LOW COST</h1>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled demoralized
                </p>
              </div>
            </div>
          </Col>
          <Col md={{ span: 12, offset: 6 }} xs={24} xl={{ span: 8, offset: 0 }}>
            <div className={Style.item}>
              <div className={Style.left}>
                <SettingsSuggestOutlinedIcon />
              </div>
              <div className={Style.right}>
                <h1>QUALITY</h1>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled demoralized
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Divider />
      </div>
    </div>
  );
};

export default Diffirence;
