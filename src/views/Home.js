import React from "react";
import { useNavigate } from "react-router-dom";

import NavHeader from "../components/navigation/NavHeader"

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <NavHeader/>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </>
  );
}

export default Home;