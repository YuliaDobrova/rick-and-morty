import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <Link className="LogoLink" to="/">
        <img src={logo} className={styles.logo} alt="Logo" />
      </Link>
    </>
  );
};

export default Logo;
