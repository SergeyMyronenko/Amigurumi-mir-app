import css from "./Header.module.css";
import { Navigation } from "../Navigation/Navigation";
import logo from "../../images/logo.png";

export const Header = () => {
  return (
    <div className={css.header}>
      <p>empty blok header</p>
      <div className={css.navi}>
        <img src={logo} alt="" width="60" height="60" />
        <Navigation />
      </div>
    </div>
  );
};
