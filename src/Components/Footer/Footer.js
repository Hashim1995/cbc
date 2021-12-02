import Style from "./Footer.module.scss";
import { Link } from "react-router-dom";
import Divider from "antd/lib/divider";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className={Style.main}>
      <div className="container" id="footer">
        <div className={Style.wrap}>
          <ul className={Style.nav}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <a href="#records">ABOUT</a>
            </li>
            <li>
              <Link to="/ServicesPage">SERVICES</Link>
            </li>
            <li>
              <Link to="/ProjectsPage">PROJECTS</Link>
            </li>
            <li>
              <Link to="/Partner">PARTNERS</Link>
            </li>
            {/* <li>
              <Link to="/About">CONTACT</Link>
            </li> */}
          </ul>
          {/* <ul className={Style.social}>
            <li>
              {" "}
              <Link to="/">
                <FacebookIcon />
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/">
                <InstagramIcon />
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/">
                <LinkedInIcon />
              </Link>
            </li>
          </ul> */}
          <div className={Style.about}>
            <h5>Salyan Highway 15, Garadag Region, Baku, Azerbaijan </h5>
            <br />
            <a href="mailto: info@wemblydevelopments.com">
              info@wemblydevelopments.com
            </a>
            <br />
            <a href="tel:+99450 2139238"> Mob: +99450 2139238</a>
            <br />
            <a href="tel:+99412 4471412">
              {" "}
              Telephone: +99412 4471412, 4471417, 4471494 (Fax)
            </a>
          </div>
          <Divider style={{ borderColor: "grey" }} />
          <a
            className={Style.qscepters}
            href="https://www.qscepter.com/"
            target="_blank"
            rel="noreferrer"
          >
            © Developed by Qscepter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
