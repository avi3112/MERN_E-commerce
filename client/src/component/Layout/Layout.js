import React from "react";
import Footer from "./Footer.js";
import Headers from "./Header.js";

const Layout = ({ children }) => {
  return (
    <div>
      <Headers />
      <main style={{ minHeight: "80vh" }}>{children} </main>
      <Footer />
    </div>
  );
};

export default Layout;
