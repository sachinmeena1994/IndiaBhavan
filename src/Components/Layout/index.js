import React from "react";
import Header from "../Header";
function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="content">{children}</main>
    </>
  );
}

export default Layout;
