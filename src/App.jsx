import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopPage from "./Pages/ShopPage";
import ProductPage from "./Pages/ProductPAge";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
