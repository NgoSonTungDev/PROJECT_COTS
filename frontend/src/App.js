import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Register from "./pages/Register/Register";
import Sizecheck from "./pages/Sizecheck/Sizecheck";

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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
