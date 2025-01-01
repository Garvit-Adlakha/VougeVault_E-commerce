import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Import useAuth

export const LoginSignup = () => {
  const { login } = useAuth(); // Get login from context
  const navigate = useNavigate();
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    fullname: "",
    username:"",
    password: "",
    email: ""
  });
  const [error, setError] = useState(""); 

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/v1/users/login', formData);
      if (response.data.success) {
        login(response.data.user); // Use the login function
        navigate('/');
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError("Error during login: " + error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/v1/users/register', formData);
      if (response.data.success) {
        login(response.data.user); // Use the login function
        navigate('/');
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError("Error during signup: " + error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-black via-yellow-300 to-yellow-200 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          {state}
        </h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Display error messages */}

        <div className="flex flex-col gap-4 mb-6">
          {state === "Sign Up" && (
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={changeHandler}
              placeholder="Enter your Name"
              className="h-14 w-full px-4 border border-gray-300 rounded-lg text-gray-700 focus:border-yellow-500 focus:outline-none"
            />
          )}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={changeHandler}
            placeholder="Enter your username"
            className="h-14 w-full px-4 border border-gray-300 rounded-lg text-gray-700 focus:border-yellow-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter your Email"
            className="h-14 w-full px-4 border border-gray-300 rounded-lg text-gray-700 focus:border-yellow-500 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter your Password"
            className="h-14 w-full px-4 border border-gray-300 rounded-lg text-gray-700 focus:border-yellow-500 focus:outline-none"
          />
        </div>

        <button
          className="w-full h-12 bg-black text-yellow-500 text-lg rounded-lg hover:bg-yellow-600 focus:bg-yellow-600 transition duration-300 border-none font-medium"
          onClick={() => { state === 'Login' ? handleLogin() : handleSignUp(); }}
        >
          Continue
        </button>

        {state === "Sign Up" ? (
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => setState('Login')}
              className="text-yellow-500 hover:underline focus:outline-none"
            >
              Login here
            </button>
          </p>
        ) : (
          <p className="mt-4 text-center text-sm text-gray-600">
            Create an account?{' '}
            <button
              onClick={() => setState('Sign Up')}
              className="text-yellow-500 hover:underline focus:outline-none"
            >
              Click Here
            </button>
          </p>
        )}

        <div className="flex items-start mt-4 text-sm text-gray-600">
          <input type="checkbox" id="terms" className="mr-2" required />
          <label htmlFor="terms">
            By continuing, I agree to the{' '}
            <a href="/terms" className="text-yellow-500 hover:underline">
              terms of use
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-yellow-500 hover:underline">
              privacy policy
            </a>.
          </label>
        </div>
      </div>
    </div>
  );
};
