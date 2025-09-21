import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const API = 'https://proctor-mate-backend.vercel.app';


const Allocate = () => {
  const [date, setDate] = useState('');
  const [hall, setHall] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [hallsList, setHallsList] = useState([]);
  const [teachersList, setTeachersList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) throw new Error('Token is missing');

        const [hallsRes, teachersRes] = await Promise.all([
          axios.get(`${API}/halls`, { headers: { Authorization: `Bearer ${token}` } }),
          axios.get(`${API}/teachers`, { headers: { Authorization: `Bearer ${token}` } }),
        ]);

        setHallsList(hallsRes.data);
        setTeachersList(teachersRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error(error.response?.data?.message || 'Failed to load halls/teachers');
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token is missing');

      await axios.post(
        `${API}/allocation/allocate`,
        { date, hall, teachers },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success('Teachers allocated successfully');
      setDate('');
      setHall('');
      setTeachers([]);
    } catch (error) {
      console.error('Error allocating:', error);
      toast.error(error.response?.data?.message || 'Allocation failed');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10"
    >
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">Allocate Teachers</h2>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Hall</label>
        <select
          value={hall}
          onChange={(e) => setHall(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Hall</option>
          {hallsList.map((h) => (
            <option key={h._id} value={h.number}>
              {h.number}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-gray-700 font-semibold mb-2">Teachers</label>
        <select
          multiple
          value={teachers}
          onChange={(e) => setTeachers(Array.from(e.target.selectedOptions, (o) => o.value))}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
        >
          {teachersList.map((t) => (
            <option key={t._id} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
        <p className="text-xs text-gray-500 mt-1">
          Hold Ctrl (Windows) or Cmd (Mac) to select multiple teachers.
        </p>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition"
      >
        Allocate
      </button>
    </form>
  );
};

export default Allocate;
