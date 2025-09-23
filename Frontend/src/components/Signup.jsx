import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  const [collegeName, setCollegeName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://proctor-mate-backend.vercel.app/auth/signup', { collegeName, email, password });
      toast.success("Signup Successful!!");
      localStorage.setItem('Admin', JSON.stringify(res.data.admin));
      localStorage.setItem('token', res.data.admin.token);
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      toast.error(error.response.data.message || "Error while Signing Up!!");
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
        <h2 className="flex items-center justify-center text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="collegeName" className="block text-gray-700 dark:text-gray-200">College Name</label>
            <input
              type="text"
              id="collegeName"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              placeholder="Enter your college name"
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-black placeholder-gray-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-black placeholder-gray-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-200">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-black placeholder-gray-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            Already have an account? 
            <Link to="/login" className="text-blue-600 hover:underline"> Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
