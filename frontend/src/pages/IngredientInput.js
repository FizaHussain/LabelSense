import React from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../components/ImageUpload";
import CameraScanner from "../components/CameraScanner";
import "../App.css";

const IngredientInput = () => {
  const navigate = useNavigate();

  const handleEnterIngredients = () => {
    navigate("/result");
  };

  const handleUploadImage = (ingredients) => {
    // Pass ingredients to the result page
    navigate("/result", { state: { ingredients } });
  };

  const handleScanImage = (ingredients) => {
    // Pass ingredients to the result page
    navigate("/result", { state: { ingredients } });
  };

  return (
    <div className="ingredient-input">
      <h2>Analyze Ingredients</h2>
      <button onClick={handleEnterIngredients}>Enter Ingredients</button>
      <ImageUpload onAnalyze={handleUploadImage} />
      <CameraScanner onScan={handleScanImage} />
    </div>
  );
};

export default IngredientInput;