import { Link } from "react-router-dom";
import css from "./Navigation.module.css";
import { useState } from "react";
import clsx from "clsx";

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState("Головна");

  const handleSelectedLink = (title) => {
    setActiveLink(title);
  };

  return (
    <div className={css.naviWrapper}>
      <nav className={css.navi}>
        <ul className={css.naviList}>
          <li
            className={clsx(
              css.naviListItem,
              activeLink === "Головна" && css.active
            )}
            onClick={() => {
              handleSelectedLink("Головна");
            }}
          >
            <Link to="/Amigurumi-mir/" className={css.naviListLink}>
              Головна
            </Link>
          </li>
          <li
            className={clsx(
              css.naviListItem,
              activeLink === "Каталог" && css.active
            )}
            onClick={() => {
              handleSelectedLink("Каталог");
            }}
          >
            <Link to="/Amigurumi-mir/catalog" className={css.naviListLink}>
              Каталог
            </Link>
          </li>
          <li
            className={clsx(
              css.naviListItem,
              activeLink === "Про Нас" && css.active
            )}
            onClick={() => {
              handleSelectedLink("Про Нас");
            }}
          >
            <Link to="/Amigurumi-mir/about-us" className={css.naviListLink}>
              Про Нас
            </Link>
          </li>
          <li className={css.naviListItem}>
            <Link
              to="/Amigurumi-mir/payment-and-delivery"
              className={clsx(
                css.naviListLink,
                activeLink === "Оплата та доставка" && css.active
              )}
              onClick={() => {
                handleSelectedLink("Оплата та доставка");
              }}
            >
              Оплата та доставка
            </Link>
          </li>
          <li
            className={clsx(
              css.naviListItem,
              activeLink === "Контакти" && css.active
            )}
            onClick={() => {
              handleSelectedLink("Контакти");
            }}
          >
            <Link to="/Amigurumi-mir/contacts" className={css.naviListLink}>
              Контакти
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
