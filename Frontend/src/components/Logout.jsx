import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.removeItem('token');
        toast.success("Logout Successfully!!");
        
        setTimeout(()=>{
            navigate("/");
        },500);
    };

    // Call handleLogout when the component mounts
    React.useEffect(() => {
        handleLogout();
    },);

    return (
        <div className="flex justify-center items-center h-screen">
            <h2 className="text-2xl font-bold">Logging out...</h2>
        </div>
    );
};

export default Logout;
