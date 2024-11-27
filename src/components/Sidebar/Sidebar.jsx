import { useSelector } from "react-redux";
import css from "./Sidebar.module.css";
import { selectCategories } from "../../redux/categories/selectors";
// import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const Sidebar = () => {
  const listItems = useSelector(selectCategories);

  return (
    <div className={css.sidebar}>
      <h2 className={css.title}>Категорії</h2>
      <ul className={css.categoryList}>
        {listItems.map((item, i) => {
          return (
            <li key={i} className={css.categoryItem}>
              <p>{item.name}</p>
              <IoIosArrowDown className={css.icon} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
