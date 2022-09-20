import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Register from "./pages/Register/Register";
import Sale from "./pages/Sale/Sale";
import Sizecheck from "./pages/Sizecheck/Sizecheck";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Payment from "./pages/Payment/Payment";
import History from "./pages/History/History";
import AdminHistory from "./pages/AdminHistory/AdminHistory";
function App() {
  const admin = localStorage.getItem("admin");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/size-check" element={<Sizecheck />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/productDetail/payment/:id" element={<Payment />} />
          <Route path="/history" element={<History />} />
          <Route path="/adminHistory" element={<AdminHistory />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
