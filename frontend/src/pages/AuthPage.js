import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AuthPage = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In
    console.log("Signing in with Google");
    navigate("/profile");
  };

  const handlePhoneSignIn = () => {
    // Implement Phone Sign-In
    console.log("Signing in with Phone");
    navigate("/profile");
  };

  return (
    <div className="auth-page">
      <h2>Sign Up / Sign In</h2>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      <button onClick={handlePhoneSignIn}>Sign In with Phone</button>
    </div>
  );
};

export default AuthPage;