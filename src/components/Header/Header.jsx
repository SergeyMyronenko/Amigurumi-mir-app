import css from "./Header.module.css";
import { Navigation } from "../Navigation/Navigation";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";

export const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.headerIcon}>
        <a
          className={css.headerIconLink}
          href="https://www.facebook.com/AmigurumiMir/"
          target="_blank"
        >
          <img
            className={css.headerIconImage}
            src={facebook}
            alt="icon facebook"
            width="20"
            height="20"
          />
        </a>
        <a
          className={css.headerIconLink}
          href="https://www.instagram.com/amigurumi_mir_/"
          target="_blank"
        >
          <img
            className={css.headerIconImage}
            src={instagram}
            alt="icon instagram"
            width="20"
            height="20"
          />
        </a>
        {/* <Link
          className={css.headerIconLink}
          to="https://www.facebook.com/AmigurumiMir/"
        >
          <img
            className={css.headerIconImage}
            src={facebook}
            alt="icon facebook"
            width="20"
            height="20"
          />
        </Link>
        <Link
          className={css.headerIconLink}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.instagram.com/amigurumi_mir_/",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          <img
            className={css.headerIconImage}
            src={instagram}
            alt="icon instagram"
            width="20"
            height="20"
          />
        </Link> */}
      </div>
      <div className={css.navi}>
        <div className={css.naviLogo}>
          <img src={logo} alt="" width="60" height="60" />
          <div>
            <Link to="/Amigurumi-mir" className={css.logoLink}>
              Amigurumi-mir
            </Link>
            <p className={css.desc}>Пряжа та товари для рукоділля</p>
          </div>
        </div>

        <Navigation />
      </div>
    </div>
  );
};
