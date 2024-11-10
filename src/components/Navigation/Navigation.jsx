import { Link } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <div>
      <nav className={css.navi}>
        <ul className={css.naviList}>
          <li>
            <Link to="/Amigurumi-mir/">Головна</Link>
          </li>
          <li>
            <Link to="/Amigurumi-mir/catalog">Каталог</Link>
          </li>
          <li>
            <Link to="/Amigurumi-mir/about-us">Про Нас</Link>
          </li>
          <li>
            <Link to="/Amigurumi-mir/payment-and-delivery">
              Оплата та доставка
            </Link>
          </li>
          <li>
            <Link to="/Amigurumi-mir/contacts">Контакти</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
