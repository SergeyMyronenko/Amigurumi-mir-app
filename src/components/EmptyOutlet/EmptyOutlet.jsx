import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import css from "./EmptyOutlet.module.css";
import { Sidebar } from "../Sidebar/Sidebar";
// import { useState } from "react";

const EmptyOutlet = () => {
  // const [titleName, setTitleName] = useState();

  return (
    <div className={css.container}>
      <Header />
      <main className={css.mainWrapper}>
        <Sidebar />
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default EmptyOutlet;
