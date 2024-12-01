/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/auth/login',{email,password});
      toast.success("Loggedin Successfully!!");
      localStorage.setItem('Admin', JSON.stringify(res.data.admin));
      localStorage.setItem('token', (res.data.admin.token));

      setTimeout(()=>{
        navigate("/");
      },500);
    } catch (error) {
      toast.error("Invalid Credentials!!")
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</Link>
        </div>
        <div className="mt-2 text-center">
          <p className="text-gray-700">Dont have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;