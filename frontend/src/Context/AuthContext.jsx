import React, { createContext, useState, useContext } from 'react';
import Alert from '../Components/Alert/Alerts'; // Import the Alert component

// Create a new context
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState(null); // State for managing alerts

  // Example login method (you would replace this with your actual login logic)
  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    setAlert({ type: 'success', message: 'Welcome to VogueVault' });
    localStorage.setItem('token', 'your-token'); // Example of setting a token
  };

  // Logout method
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setAlert({ type: 'success', message: 'Logged out successfully' });
    localStorage.removeItem('token'); // Example of clearing stored token
  };

  // Clear alert after a few seconds
  React.useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [alert]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
      {alert && <Alert type={alert.type} message={alert.message} />} {/* Render the alert */}
    </AuthContext.Provider>
  );
};
