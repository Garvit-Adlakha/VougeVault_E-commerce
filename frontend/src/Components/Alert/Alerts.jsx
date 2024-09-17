// Alert.js
import React from 'react';

const Alerts = ({ type, message }) => {
  const baseStyle = "fixed top-4 right-4 p-4 rounded-lg text-white";
  const alertStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div className={`${baseStyle} ${alertStyles[type]}`}>
      {message}
    </div>
  );
};

export default Alerts;
