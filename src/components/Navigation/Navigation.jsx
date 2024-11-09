import { Link } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <div>
      <nav className={css.navi}>
        <ul className={css.naviList}>
          <li>
            <Link>Головна</Link>
          </li>
          <li>
            <Link>Каталог</Link>
          </li>
          <li>
            <Link>Про Нас</Link>
          </li>
          <li>
            <Link>Оплата та доставка</Link>
          </li>
          <li>
            <Link>Контакти</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
