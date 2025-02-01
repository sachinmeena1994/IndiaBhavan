import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import "./App.css";
import Layout from "./Components/Layout";
import { app } from "./Utilis/Firebase";
const Home = lazy(() => import("./Pages/Home/index"));
const Menu = lazy(() => import("./Pages/Menu/index"));
const Admin = lazy(() => import("./Pages/Admin/index"));
const Catering = lazy(() => import("./Pages/Catering/index"));
const About = lazy(() => import("./Pages/AboutUs/index"));
const Contact = lazy(() => import("./Pages/ContactUs/index"));
function App() {
  return (
    <HashRouter>
      <Layout>
        {/* <Suspense fallback={<Loading />}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* </Suspense> */}
      </Layout>
    </HashRouter>
  );
}

export default App;
