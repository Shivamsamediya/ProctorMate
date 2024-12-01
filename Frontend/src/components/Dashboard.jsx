// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { Navigate } from 'react-router-dom'; 
import jsPDF from 'jspdf'; 
import 'jspdf-autotable';
import Navbar from './Navbar';
import Footer from './Footer';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [allocations, setAllocations] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllocations = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          navigate('/login');
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.get('http://localhost:8000/allocation/allocations', config);
        console.log('Allocations fetched:', data);

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
  }, [navigate]); 

  // If there's no token, redirect to the login page
  const token = localStorage.getItem('token');
  if (!token) {
    // Render Navigate component
    return <Navigate to="/login" />; 
  }

  // Function to download the PDF
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Create a title
    doc.setFontSize(18);
    doc.text('Dashboard', 14, 20);

    // Create a table
    const tableData = allocations.map(allocation => ({
      Date: new Date(allocation.date).toLocaleDateString(),
      Hall: allocation.hall,
      Teachers: allocation.teachers.join(', ')
    }));

    // Add the table to the PDF
    doc.autoTable({
      head: [['Date', 'Hall', 'Teachers']],
      body: tableData.map(({ Date, Hall, Teachers }) => [Date, Hall, Teachers]),
      startY: 30,
    });

    // Save the PDF
    doc.save('allocations.pdf');
  };

  // Function to delete all allocations
  const deleteAllocations = async () => {
    try {
      await axios.delete('http://localhost:8000/allocation/allocations', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllocations([]); // Clear allocations from state
      toast.success('All allocations deleted successfully');
    } catch (error) {
      toast.error('Error deleting allocations:', error.response ? error.response.data : error.message);
      setError('Failed to delete allocations. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl text-center font-bold mb-4">Dashboard</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b text-left font-semibold w-1/3">Date</th>
              <th className="py-2 px-4 border-b text-left font-semibold w-1/3">Hall</th>
              <th className="py-2 px-4 border-b text-left font-semibold w-1/3">Teachers</th>
            </tr>
          </thead>
          <tbody>
            {allocations.length === 0 ? (
              <tr>
                <td colSpan="3" className="py-2 px-4 text-center">No allocations found</td>
              </tr>
            ) : (
              allocations.map((allocation) => (
                <tr key={allocation._id} className="border-b hover:bg-gray-100 transition duration-200">
                  <td className="py-4 px-4 w-1/3">{new Date(allocation.date).toLocaleDateString()}</td>
                  <td className="py-4 px-4 w-1/3">{allocation.hall}</td>
                  <td className="py-4 px-4 w-1/3">{allocation.teachers.join(', ')}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Centered Action Buttons */}
        <div className="flex justify-center mb-4 mt-4 space-x-4">
          {/* Download PDF Button */}
          <button
            onClick={downloadPDF}
            className="py-2 px-4 bg-blue-600 text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700">
            Download PDF
          </button>
          {/* Delete Allocations Button */}
          <button
            onClick={deleteAllocations}
            className="py-2 px-4 bg-red-600 text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-red-700">
            Delete All Allocations
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
