import React, { useState } from "react";
import axios from "axios";

const ImageUpload = ({ onAnalyze }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/api/analyze-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onAnalyze(response.data);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Analyze Image</button>
    </div>
  );
};

export default ImageUpload;