import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>LabelSense</h1>
      <p>
        LabelSense helps you analyze food and cosmetic labels to ensure they are safe for you based on your personal profile.
      </p>
      <button onClick={() => navigate("/auth")}>Sign Up / Sign In</button>
    </div>
  );
};

export default HomePage;