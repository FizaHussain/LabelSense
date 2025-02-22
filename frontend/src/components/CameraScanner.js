import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const CameraScanner = ({ onScan }) => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  // Capture photo from the webcam
  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  // Upload the captured image to the backend for analysis
  const uploadPhoto = async () => {
    if (!image) return;

    try {
      // Convert the base64 image to a file
      const blob = await fetch(image).then((res) => res.blob());
      const file = new File([blob], "capture.jpg", { type: "image/jpeg" });

      // Send the file to the backend
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("http://localhost:5000/api/analyze-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Pass the analyzed data to the parent component
      onScan(response.data);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div>
      <h2>Scan Label with Camera</h2>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
        height="auto"
      />
      <button onClick={capturePhoto}>Capture Photo</button>
      {image && (
        <div>
          <h3>Captured Image</h3>
          <img src={image} alt="Captured" style={{ width: "100%", maxWidth: "300px" }} />
          <button onClick={uploadPhoto}>Analyze Photo</button>
        </div>
      )}
    </div>
  );
};

export default CameraScanner;