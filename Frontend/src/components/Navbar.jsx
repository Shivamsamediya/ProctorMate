import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('Admin');
    toast.success("Logout Successfully!!");
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const navItems = (
    <>
      <li>
        <a href='/' className='text-sm font-medium hover:text-blue-600 transition-colors duration-300'>Home</a>
      </li>
      <li>
        <a href='/allocate' className='text-sm font-medium hover:text-blue-600 transition-colors duration-300'>Allocate</a>
      </li>
      <li>
        <a href='/dashboard' className='text-sm font-medium hover:text-blue-600 transition-colors duration-300'>Dashboard</a>
      </li>
      <li>
        <a href='/manage' className='text-sm font-medium hover:text-blue-600 transition-colors duration-300'>Manage</a>
      </li>
      <li>
        <a href='/contact' className='text-sm font-medium hover:text-blue-600 transition-colors duration-300'>Contact</a>
      </li>
      <li>
        <a href='/about-us' className='text-sm font-medium hover:text-blue-600 transition-colors duration-300'>About Us</a>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-md py-3 w-full">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">

        {/* Left - Hamburger + Logo */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Button */}
          <div className="lg:hidden dropdown">
            <label tabIndex={0} className="btn btn-ghost p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-2 p-2 shadow bg-white rounded-box w-40 space-y-2 text-sm"
            >
              {navItems}
            </ul>
          </div>

          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold text-gray-800 hover:text-teal-600 transition-colors duration-300"
          >
            ProctorMate
          </a>
        </div>

        {/* Center - Links (hidden on mobile) */}
        <ul className="hidden lg:flex space-x-6 text-sm">
          {navItems}
        </ul>

        {/* Right - Auth Buttons */}
        <div>
          {token ? (
            <button
              onClick={handleLogout}
              className="btn bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 text-sm sm:text-md"
            >
              Logout
            </button>
          ) : (
            <a
              href="/login"
              className="btn bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 text-sm sm:text-md"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
