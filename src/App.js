import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import "./App.css";
import Layout from "./Components/Layout";
import { app } from "./Utilis/Firebase";
const Home = lazy(() => import("./Pages/Home/index"));
const Menu = lazy(() => import("./Pages/Menu/index"));
function App() {
  return (
    <HashRouter>
      <Layout>
        {/* <Suspense fallback={<Loading />}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        {/* </Suspense> */}
      </Layout>
    </HashRouter>
  );
}

export default App;
