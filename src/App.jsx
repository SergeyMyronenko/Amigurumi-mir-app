// import { useState } from 'react'
import { HomePage } from "./pages/HomePage/HomePage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmptyOutlet from "./components/EmptyOutlet/EmptyOutlet";
import { ViewProduct } from "./components/ViewProduct/ViewProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Amigurumi-mir" element={<EmptyOutlet />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:productId" element={<ViewProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
