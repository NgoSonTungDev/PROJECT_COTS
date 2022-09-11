import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register/Register";
import "./App.scss";
import Home from "./pages/Home/Home";

function App() {
  const admin = localStorage.getItem("admin");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
