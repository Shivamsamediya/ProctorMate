import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom'; 
import jsPDF from 'jspdf'; 
import 'jspdf-autotable';
import Navbar from './Navbar';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [allocations, setAllocations] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchAllocations = async () => {
      try {
        if (!token) {
          navigate('/login');
          return;
        }

        const { data } = await axios.get(
          'https://proctor-mate-backend.vercel.app/allocation/allocations',
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (Array.isArray(data)) {
          setAllocations(data);
        } else {
          setError('Unexpected data format received.');
        }
      } catch (err) {
        console.error('Error fetching allocations:', err.response ? err.response.data : err.message);
        setError('Failed to load allocations. Please try again later.');
      }
    };

    fetchAllocations();
  }, [navigate, token]); 

  if (!token) return <Navigate to="/login" />;

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Dashboard', 14, 20);

    const tableData = allocations.map(a => ({
      Date: new Date(a.date).toLocaleDateString(),
      Hall: a.hall,
      Teachers: a.teachers.join(', ')
    }));

    doc.autoTable({
      head: [['Date', 'Hall', 'Teachers']],
      body: tableData.map(({ Date, Hall, Teachers }) => [Date, Hall, Teachers]),
      startY: 30,
    });

    doc.save('allocations.pdf');
  };

  const deleteAllocations = async () => {
    try {
      await axios.delete(
        'https://proctor-mate-backend.vercel.app/allocation/allocations',
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAllocations([]);
      toast.success('All allocations deleted successfully');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to delete allocations');
      setError('Failed to delete allocations. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <h2 className="text-2xl text-center font-bold mb-4 text-gray-800 dark:text-gray-100">
          Dashboard
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="overflow-x-auto rounded-md shadow-md">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="py-2 px-4 border-b dark:border-gray-600 text-left font-semibold w-1/3">Date</th>
                <th className="py-2 px-4 border-b dark:border-gray-600 text-left font-semibold w-1/3">Hall</th>
                <th className="py-2 px-4 border-b dark:border-gray-600 text-left font-semibold w-1/3">Teachers</th>
              </tr>
            </thead>
            <tbody>
              {allocations.length === 0 ? (
                <tr>
                  <td colSpan="3" className="py-2 px-4 text-center text-gray-600 dark:text-gray-300">
                    No allocations found
                  </td>
                </tr>
              ) : (
                allocations.map((allocation) => (
                  <tr key={allocation._id} className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200">
                    <td className="py-4 px-4 w-1/3">{new Date(allocation.date).toLocaleDateString()}</td>
                    <td className="py-4 px-4 w-1/3">{allocation.hall}</td>
                    <td className="py-4 px-4 w-1/3">{allocation.teachers.join(', ')}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mb-4 mt-4 space-x-4">
          <button
            onClick={downloadPDF}
            className="py-2 px-4 bg-blue-600 text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700"
          >
            Download PDF
          </button>
          <button
            onClick={deleteAllocations}
            className="py-2 px-4 bg-red-600 text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-red-700"
          >
            Delete All Allocations
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
