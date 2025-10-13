import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./layout/AppLayout";
import { SignUp } from "./pages/AuthPages/SignUp";
import { SignIn } from "./pages/AuthPages/SignIn";
import { Product } from "./pages/ProductManagement/Product";
import { Home } from "./pages/Dashboard/Home";
import { ListProduct } from "./pages/ProductManagement/ListProduct";
import { ListCategory } from "./pages/Category/ListCategory";
import { ToastContainer } from "react-toastify";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<AppLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/list-product" element={<ListProduct />} />
            <Route path="/product" element={<Product />} />
            <Route path="/category" element={<ListCategory />} />
          </Route>
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
