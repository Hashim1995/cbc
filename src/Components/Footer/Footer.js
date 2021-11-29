import Style from "./Footer.module.scss";
import { Link } from "react-router-dom";
import Divider from "antd/lib/divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className={Style.main}>
      <div className="container">
        <div className={Style.wrap}>
          <ul className={Style.nav}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">ABOUT</Link>
            </li>
            <li>
              <Link to="/">SERVICES</Link>
            </li>
            <li>
              <Link to="/">PROJECTS</Link>
            </li>
            <li>
              <Link to="/">PARTNERS</Link>
            </li>
            <li>
              <Link to="/">CONTACT</Link>
            </li>
          </ul>
          <ul className={Style.social}>
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
          </ul>
          <div className={Style.about}>
            <h5>24a, 28 may street, Baku, Azerbaijan </h5>
            <a href="mailto: abc@example.com">abc@example.com</a>
            <a href="tel:555-666-7777">555-666-7777</a>
          </div>
          <Divider style={{ borderColor: "grey" }} />
          <a
            className={Style.qscepters}
            href="https://www.qscepter.com/"
            target="_blank"
          >
            © Developed by Qscepter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
