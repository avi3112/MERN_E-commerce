import React from "react";
import Layout from "./../component/Layout/Layout.js";
import { useAuth } from "../context/auth.js";

const Homepage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <div>Homepage</div>
      <pre>{JSON.stringify(auth)}</pre>
    </Layout>
  );
};

export default Homepage;
