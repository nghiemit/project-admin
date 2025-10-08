import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./layout/AppLayout";
import { SignUp } from "./pages/AuthPages/SignUp";
import { SignIn } from "./pages/AuthPages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<h1>Dashboard</h1>} />
          <Route path="product" element={<h1>Trang sản phẩm</h1>} />
          <Route path="product/:id" element={<h1>Trang detail</h1>} />
          <Route path="category" element={<h1>Trang category</h1>} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
