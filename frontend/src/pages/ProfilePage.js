import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [skinType, setSkinType] = useState("");
  const [scalpType, setScalpType] = useState("");
  const [allergies, setAllergies] = useState("");

  const handleSubmit = () => {
    // Save user profile (e.g., to local storage or backend)
    const profile = { name, age, skinType, scalpType, allergies };
    localStorage.setItem("userProfile", JSON.stringify(profile));
    navigate("/analysis");
  };

  return (
    <div className="profile-page">
      <h2>Create Your Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Skin Type"
        value={skinType}
        onChange={(e) => setSkinType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Scalp Type"
        value={scalpType}
        onChange={(e) => setScalpType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Known Allergies"
        value={allergies}
        onChange={(e) => setAllergies(e.target.value)}
      />
      <button onClick={handleSubmit}>Save Profile</button>
    </div>
  );
};

export default ProfilePage;