import React from "react";
import { Link } from "react-router-dom";
import Layout from "../component/Layout/Layout";

const Pagenot = () => {
  return (
    <Layout>
      <div className="pnf">
        <h1>404</h1>
        <h2>opps! Page not found</h2>
        <Link to="/"> go back</Link>
      </div>
    </Layout>
  );
};

export default Pagenot;
