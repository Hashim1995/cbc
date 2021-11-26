import Style from "./Stats.module.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
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
              <VisibilitySensor partialVisibility offset={{ bottom: 60 }}>
                {({ isVisible }) => (
                  <div>
                    {isVisible ? (
                      <CountUp
                        className={Style.counter}
                        start={0}
                        end={80}
                        duration={1.5}
                      ></CountUp>
                    ) : (
                      <CountUp
                        className={Style.counter}
                        start={0}
                        end={80}
                        duration={1.5}
                      ></CountUp>
                    )}
                  </div>
                )}
              </VisibilitySensor>
              <h3>Finished Projects</h3>
            </div>
          </Col>
          <Col sm={12} xs={24} lg={8}>
            <div id="stat" className={Style.item}>
              <PublishedWithChangesIcon />
              <VisibilitySensor partialVisibility offset={{ bottom: 60 }}>
                {({ isVisible }) => (
                  <div>
                    {isVisible ? (
                      <CountUp
                        className={Style.counter}
                        start={0}
                        end={2}
                        duration={1.5}
                      ></CountUp>
                    ) : (
                      <CountUp
                        className={Style.counter}
                        start={0}
                        end={2}
                        duration={1.5}
                      ></CountUp>
                    )}
                  </div>
                )}
              </VisibilitySensor>
              <h3>Under construction projects</h3>
            </div>
          </Col>
          <Col sm={12} xs={24} lg={8}>
            <div id="stat" className={Style.item}>
              <ModelTrainingIcon />
              <VisibilitySensor partialVisibility offset={{ bottom: 60 }}>
                {({ isVisible }) => (
                  <div>
                    {isVisible ? (
                      <CountUp
                        className={Style.counter}
                        start={0}
                        end={15}
                        duration={2}
                      ></CountUp>
                    ) : (
                      <CountUp
                        className={Style.counter}
                        start={0}
                        end={15}
                        duration={2}
                      ></CountUp>
                    )}
                  </div>
                )}
              </VisibilitySensor>
              <h3>Planned projects</h3>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Stats;
