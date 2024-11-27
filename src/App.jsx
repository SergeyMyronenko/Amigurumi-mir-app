// import { useState } from 'react'
import { HomePage } from "./pages/HomePage/HomePage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmptyOutlet from "./components/EmptyOutlet/EmptyOutlet";
import { ViewProduct } from "./components/ViewProduct/ViewProduct";
import { InfoPage } from "./pages/InfoPage/InfoPage";
import { PaymentPage } from "./pages/PaymentPage/PaymentPage";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/categories/operation";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/Amigurumi-mir/" element={<EmptyOutlet />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:productId" element={<ViewProduct />} />
          <Route path="about-us" element={<InfoPage />} />
          <Route path="payment-and-delivery" element={<PaymentPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
