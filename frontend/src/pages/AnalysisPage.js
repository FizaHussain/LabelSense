import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AnalysisPage = () => {
  const navigate = useNavigate();
  const [labelType, setLabelType] = useState("");

  const handleStartAnalysis = () => {
    if (labelType) {
      navigate(`/ingredient-input?type=${labelType}`);
    }
  };

  return (
    <div className="analysis-page">
      <h2>Start Analyzing</h2>
      <div>
        <label>
          <input
            type="radio"
            name="labelType"
            value="food"
            onChange={(e) => setLabelType(e.target.value)}
          />
          Food Label
        </label>
        <label>
          <input
            type="radio"
            name="labelType"
            value="cosmetics"
            onChange={(e) => setLabelType(e.target.value)}
          />
          Cosmetics Label
        </label>
      </div>
      <button onClick={handleStartAnalysis}>Next</button>
    </div>
  );
};

export default AnalysisPage;