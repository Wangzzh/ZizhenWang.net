import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </>
  );
}

export default Home;