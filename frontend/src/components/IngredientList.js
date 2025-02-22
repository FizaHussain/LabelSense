import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IngredientList from "../components/IngredientList";
import "../App.css";

const IngredientList = ({ ingredients }) => {
  return (
    <div>
      <h2>Results</h2>
      {ingredients.length > 0 ? (
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <h3>{ingredient.Ingredient}</h3>
              <p><strong>Common Name:</strong> {ingredient["Common Name"]}</p>
              <p><strong>Uses:</strong> {ingredient.Uses}</p>
              <p><strong>Harmfulness:</strong> {ingredient.Harmfulness}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No ingredients found.</p>
      )}
    </div>
  );
};

const ResultPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const ingredients = location.state?.ingredients || [];
  
    return (
      <div className="result-page">
        <h2>Ingredient Analysis</h2>
        <IngredientList ingredients={ingredients} />
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    );
  };

export default IngredientList;