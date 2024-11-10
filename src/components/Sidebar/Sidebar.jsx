import css from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <ul className={css.categoryList}>
        <li className={css.categoryItem}>Category</li>
        <li className={css.categoryItem}>Category</li>
        <li className={css.categoryItem}>Category</li>
        <li className={css.categoryItem}>Category</li>
        <li className={css.categoryItem}>Category</li>
        <li className={css.categoryItem}>Category</li>
        <li className={css.categoryItem}>Category</li>
        <li className={css.categoryItem}>Category</li>
        <li className={css.categoryItem}>Category</li>
        <li className={css.categoryItem}>Category</li>
      </ul>
    </div>
  );
};
