import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../components/Logo";

const Header = () => {
  return (
    <div>
      <Link to={"/"}>
        <Logo />
        <h1 className={styles.headertitle}>Rick & Morty characters</h1>
      </Link>
    </div>
  );
};

export default Header;
