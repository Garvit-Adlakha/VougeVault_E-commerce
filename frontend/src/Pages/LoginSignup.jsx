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
    console.log("SignUp function executed", formData);
  };

  return (
    <div className="w-full h-screen bg-[#fce3fe] pt-16 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">{state}</h1>

        <div className="flex flex-col gap-4 mb-6">
          {/* Conditionally render the Name input field for Sign Up */}
          {state === "Sign Up" && (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Please Enter your Name"
              className="h-14 w-full px-4 border border-gray-300 rounded-lg text-gray-700 focus:border-red-500 focus:outline-none"
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Please Enter your Email"
            className="h-14 w-full px-4 border border-gray-300 rounded-lg text-gray-700 focus:border-red-500 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Please Enter your Password"
            className="h-14 w-full px-4 border border-gray-300 rounded-lg text-gray-700 focus:border-red-500 focus:outline-none"
          />
        </div>

        <button
          className="w-full h-12 bg-black text-yellow-500 text-lg rounded-lg hover:bg-red-600 focus:bg-red-600 transition duration-300 cursor-pointer border-none font-medium"
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
              className="text-yellow-500 hover:underline"
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
              className="text-yellow-500 hover:underline"
            >
              Click Here
            </a>
          </p>
        )}

        <div className="flex items-start mt-4">
          <input type="checkbox" id="terms" className="mr-2" required />
          <label htmlFor="terms" className="text-sm text-gray-600">
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
