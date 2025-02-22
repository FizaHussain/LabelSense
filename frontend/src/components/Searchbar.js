import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/Searchbar";
import "../App.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/search-ingredient?q=${query}`);
      onSearch(response.data);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an ingredient..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

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
        <SearchBar onSearch={(ingredients) => navigate("/result", { state: { ingredients } })} />
        <button onClick={handleStartAnalysis}>Next</button>
      </div>
    );
  };

export default SearchBar;