import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./layout/AppLayout";
import { SignUp } from "./pages/AuthPages/SignUp";
import { SignIn } from "./pages/AuthPages/SignIn";
import { Product } from "./pages/ProductManagement/Product";
import { Home } from "./pages/Dashboard/Home";
import { ListProduct } from "./pages/ProductManagement/ListProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={(<Home />)} />
          <Route path="/list-product" element={(<ListProduct />)} />
          <Route path="/product" element={<Product />} />
          <Route path="category" element={<h1>Trang category</h1>} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
