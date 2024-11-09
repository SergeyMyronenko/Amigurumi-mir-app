import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import css from "./EmptyOutlet.module.css";

const EmptyOutlet = () => {
  return (
    <div className={css.container}>
      <Header />
      <Navigation />
      <main className="main-wrapper">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default EmptyOutlet;
