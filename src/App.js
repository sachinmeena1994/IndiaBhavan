import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import "./App.css";
import Layout from "./Components/Layout";

const Home = lazy(() => import("./Pages/Home/index"));

function App() {
  return (
    <HashRouter>
      <Layout>
        {/* <Suspense fallback={<Loading />}> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* </Suspense> */}
      </Layout>
    </HashRouter>
  );
}

export default App;
