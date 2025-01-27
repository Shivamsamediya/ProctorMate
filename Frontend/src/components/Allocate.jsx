import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import toast from 'react-hot-toast';

const Allocate = () => {
  const [date, setDate] = useState('');
  const [hall, setHall] = useState('');
  const [teachers, setTeachers] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by verifying the token
    const token = localStorage.getItem('token');

    if (token) {
      setIsLoggedIn(true);
    } else {
      // If no token, redirect to login page
      navigate('/login');
    }

  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!date || !hall || !teachers) {
     toast.error('All fields are required.');
      return;
    }

    const teacherArray = teachers.split(',').map((t) => t.trim());

    const payload = { date, hall, teachers: teacherArray };
    console.log('Sending allocation:', payload);

    try {
      // Get the token from localStorage
      const token = localStorage.getItem('token');
      await axios.post(
        'https://proctor-mate-backend.vercel.app/allocation/allocate',
        payload,
        {
          // Send the token in the request headers
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      // Handling success
      toast.success("Teachers allocated successfully")
    } catch (error) {
      toast.error('Error allocating teachers:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl text-center font-bold mb-4">Allocate Teachers</h2>
        {isLoggedIn ? (
          <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md">
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="hall" className="block text-gray-700">Hall</label>
              <input
                type="text"
                id="hall"
                value={hall}
                onChange={(e) => setHall(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="teachers" className="block text-gray-700">Teachers</label>
              <input
                type="text"
                id="teachers"
                value={teachers}
                onChange={(e) => setTeachers(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="py-2 px-4 bg-blue-600 text-white rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Allocate
              </button>
            </div>
          </form>
        ) : (
          <p>Redirecting to login...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Allocate;
