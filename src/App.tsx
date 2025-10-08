import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { Home } from "./pages/Dashboard/Home";
import SignUp from "./pages/AuthPages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
          </Route>
          {/* Auth Layout */}
          {/* <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
