 'use client'
 import React, { useState } from 'react';

// Login component
const Login = () => {
  // State for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login
  const handleLogin = async () => {
    try {
      // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
      const response = await fetch('YOUR_BACKEND_API_URL/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Parse the JSON response
      const data = await response.json();

      // Handle the response from the backend as needed
      console.log('Login successful:', data);

      // You may also want to redirect the user to another page upon successful login
      // Example: router.push('/dashboard');
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error.message);
    }
  };

  // JSX for the login form
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 p-2 w-full border-b border-gray-500 text-black focus:outline-none focus:border-blue-500"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border-b border-gray-500  text-black focus:outline-none focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            onClick={handleLogin}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

// Export the Login component
export default Login;
