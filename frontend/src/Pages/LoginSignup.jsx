import React, { useState } from 'react';

export const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login function executed", formData);
  };

  const signUp = async () => {
    console.log("signUp function executed", formData);
  };

  return (
    <div className="loginsignup w-full h-[80vh] bg-[#fce3fe] pt-[100px] flex justify-center items-center">
      <div className="loginsignup-container w-[580px] h-full bg-white p-10 mb-7 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-7 text-center">{state}</h1>

        <div className="loginsignup-fields flex flex-col gap-5 mb-6">
          {/* Conditionally render the Name input field for Sign Up */}
          {state === "Sign Up" && (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Please Enter your Name"
              className="h-16 w-full px-5 border border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-lg focus:border-red-500"
            />
          )}
          <input
            type="email"
            placeholder="Please Enter your Email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className="h-16 w-full px-5 border border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-lg focus:border-red-500"
          />
          <input
            type="password"
            placeholder="Please Enter your Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            className="h-16 w-full px-5 border border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-lg focus:border-red-500"
          />
        </div>

        <button
          className="w-full h-14 bg-red-500 text-white text-lg rounded-lg hover:bg-red-600 focus:bg-red-600 transition duration-300 cursor-pointer border-none font-medium"
          onClick={() => { state === 'Login' ? login() : signUp(); }}
        >
          Continue
        </button>

        {/* Conditionally render text based on state */}
        {state === "Sign Up" ? (
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a
              href="#"
              onClick={() => setState('Login')}
              className="text-red-500 hover:underline"
            >
              Login here
            </a>
          </p>
        ) : (
          <p className="mt-4 text-center text-sm text-gray-600">
            Create an account?{' '}
            <a
              href="#"
              onClick={() => setState('Sign Up')}
              className="text-red-500 hover:underline"
            >
              Click Here
            </a>
          </p>
        )}

        <div className="loginsignup-agree flex items-start mt-6">
          <input type="checkbox" id="terms" className="mt-1 mr-2" required />
          <label htmlFor="terms" className="text-sm text-gray-600">
            By continuing, I agree to the{' '}
            <a href="/terms" className="text-red-500 hover:underline">
              terms of use
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-red-500 hover:underline">
              privacy policy
            </a>.
          </label>
        </div>
      </div>
    </div>
  );
};
