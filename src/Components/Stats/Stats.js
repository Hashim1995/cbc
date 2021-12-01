import Style from "./Stats.module.scss";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Divider from "antd/lib/divider";
import DoneIcon from "@mui/icons-material/Done";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
const Stats = () => {
  return (
    <section className={Style.wrap}>
      <div className="container">
        <Divider className={Style.title}>
          OUR <b>STATICTS</b>
        </Divider>
        <Row>
          <Col sm={12} xs={24} lg={8}>
            <div id="stat" className={Style.item}>
              <DoneIcon />
              <h2 className={Style.counter}>100+</h2>
              <h3>Finished Projects</h3>
            </div>
          </Col>
          <Col sm={12} xs={24} lg={8}>
            <div id="stat" className={Style.item}>
              <PublishedWithChangesIcon />
              <h2 className={Style.counter}>20+</h2>
              <h3>Under construction projects</h3>
            </div>
          </Col>
          <Col sm={12} xs={24} lg={8}>
            <div id="stat" className={Style.item}>
              <ModelTrainingIcon />
              <h2 className={Style.counter}>100+</h2>
              <h3> Satisfied Clients</h3>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Stats;
