import Style from "./Header.module.scss";
import logo from "../../Assets/Img/logo.webp";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <nav className={Style.nav}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div>
          <Link to="/">HOME</Link>
          <Link to="/About">ABOUT</Link>
          <Link to="/">SERVICES</Link>
          <Link to="/">PROJECTS</Link>
          <Link to="/Partner">PARTNERS</Link>
          <Link to="/About">CONTACT</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
