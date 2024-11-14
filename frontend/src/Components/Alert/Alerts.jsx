// Alert.js
import React, { useEffect, useState } from 'react';

const Alerts = ({ type, message, onClose }) => {
  const baseStyle = "fixed top-4 right-4 p-4 rounded-lg text-white shadow-lg transition-all transform duration-300 ease-in-out";
  const alertStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose && onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`${baseStyle} ${alertStyles[type]} transform translate-x-0 opacity-100`}
      role="alert"
    >
      <div className="flex items-center">
        <div className="mr-3">
          {/* Add an icon depending on the alert type */}
          {type === "success" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <span className="text-lg">{message}</span>
      </div>
    </div>
  );
};

export default Alerts;
