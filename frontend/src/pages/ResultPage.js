import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ResultPage = () => {
  const navigate = useNavigate();

  // Example ingredient analysis
  const ingredient = {
    name: "Parabens",
    commonName: "Preservative",
    uses: "Prevents microbial growth",
    harmfulness: "May disrupt hormone function",
  };

  return (
    <div className="result-page">
      <h2>Ingredient Analysis</h2>
      <h3>{ingredient.name}</h3>
      <p><strong>Common Name:</strong> {ingredient.commonName}</p>
      <p><strong>Uses:</strong> {ingredient.uses}</p>
      <p><strong>Harmfulness:</strong> {ingredient.harmfulness}</p>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default ResultPage;