import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const API = 'https://proctor-mate-backend.vercel.app';

const AdminManageData = () => {
  const [halls, setHalls] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [newHall, setNewHall] = useState('');
  const [newTeacher, setNewTeacher] = useState('');

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token is missing');

      const [hallsRes, teachersRes] = await Promise.all([
        axios.get(`${API}/halls`, { headers: { Authorization: `Bearer ${token}` } }),
        axios.get(`${API}/teachers`, { headers: { Authorization: `Bearer ${token}` } }),
      ]);

      setHalls(hallsRes.data);
      setTeachers(teachersRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error(error.response?.data?.message || 'Failed to fetch data');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addHall = async () => {
    if (!newHall) return toast.error('Hall number is required');
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${API}/halls`,
        { number: newHall },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success('Hall added successfully');
      setNewHall('');
      fetchData();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to add hall');
    }
  };

  const removeHall = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API}/halls/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Hall removed successfully');
      fetchData();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to remove hall');
    }
  };

  const addTeacher = async () => {
    if (!newTeacher) return toast.error('Teacher name is required');
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${API}/teachers`,
        { name: newTeacher },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success('Teacher added successfully');
      setNewTeacher('');
      fetchData();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to add teacher');
    }
  };

  const removeTeacher = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API}/teachers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Teacher removed successfully');
      fetchData();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to remove teacher');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Manage Halls</h2>
      <div className="flex gap-2 mb-4">
        <input
          value={newHall}
          onChange={(e) => setNewHall(e.target.value)}
          placeholder="Hall No"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addHall}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition"
        >
          Add Hall
        </button>
      </div>
      <ul className="mb-8">
        {halls.map((hall) => (
          <li
            key={hall._id}
            className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded mb-2 border border-gray-100"
          >
            <span className="text-gray-700">{hall.number}</span>
            <button
              onClick={() => removeHall(hall._id)}
              className="text-red-600 hover:text-white hover:bg-red-500 px-3 py-1 rounded transition"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Manage Teachers</h2>
      <div className="flex gap-2 mb-4">
        <input
          value={newTeacher}
          onChange={(e) => setNewTeacher(e.target.value)}
          placeholder="Teacher Name"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTeacher}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition"
        >
          Add Teacher
        </button>
      </div>
      <ul>
        {teachers.map((teacher) => (
          <li
            key={teacher._id}
            className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded mb-2 border border-gray-100"
          >
            <span className="text-gray-700">{teacher.name}</span>
            <button
              onClick={() => removeTeacher(teacher._id)}
              className="text-red-600 hover:text-white hover:bg-red-500 px-3 py-1 rounded transition"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminManageData;
