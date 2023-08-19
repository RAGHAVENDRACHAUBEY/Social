import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Heeader from "./Component/Header/Heeader";
import Profile from "./Component/Profile/Profile";
import Login from "./Component/Login/Login";
import Register from "./Component/Login/Register";

function App() {
  AOS.init();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/profile/:username"
            element={
              <>
                <Heeader />
                <Profile />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
