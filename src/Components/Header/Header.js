import Style from "./Header.module.scss";
import logo from "../../Assets/Img/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <nav className={Style.nav}>
        <Link to="/">
          <img className={Style.logo} src={logo} alt="" />
        </Link>
        <div>
          <Link to="/">HOME</Link>
          <a href="#records">ABOUT</a>
          <Link to="/ServicesPage">SERVICES</Link>
          <Link to="/ProjectsPage">PROJECTS</Link>
          <Link to="/Partner">PARTNERS</Link>
          <a href="#footer">CONTACT</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
