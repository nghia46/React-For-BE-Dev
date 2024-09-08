import classNames from "classnames/bind";
import styles from "./NavBar.module.scss";

const cx = classNames.bind(styles);
const NavBar = () => {
  return (
    <nav>
        <ul className={cx("nav-bar")}>
            <li className={cx("nav-bar-item")}><a href="/">Home</a></li>
            <li className={cx("nav-bar-item")}><a href="/">News</a></li>
            <li className={cx("nav-bar-item")}><a href="/">Contact</a></li>
            <li className={cx("nav-bar-item")}><a href="/">About</a></li>
        </ul>
    </nav>
  )
}
export default NavBar;