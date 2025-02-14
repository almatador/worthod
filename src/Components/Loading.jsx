import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="loader"></div> {/* This is the spinner */}
      <style>
        {`
          .loader {
            border: 8px solid #f3f3f3; /* Light gray */
            border-top: 8px solid #3498db; /* Blue */
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 2s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingPage;
