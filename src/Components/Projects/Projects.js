import Style from "./Projects.module.scss";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Slider from "react-slick";
import projectList from "../../Assets/Img/projectList";
import { Link } from "react-router-dom";
const Projects = () => {
  const settings = {
    arrows: false,
    dots: true,
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 3,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={Style.main}>
      <h1>
        OUR <b>PROJECTS</b>
      </h1>
      <Row>
        <Col xl={24} xxl={24}>
          <Slider {...settings}>
            {projectList.map((project, index) => (
              <Link key={index} to={`/project/${project.title}`}>
                <div className={Style.item}>
                  <img
                    src={project.previewImg}
                    alt=""
                    title={project.desciption}
                  />
                  <div className={Style.center}>
                    <h1>{project.title}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
