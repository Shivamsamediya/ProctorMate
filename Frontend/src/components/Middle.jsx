// eslint-disable-next-line no-unused-vars
import React from 'react';

function Middle() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            {/* Hero Section */}
            <section className="hero bg-gradient-to-r from-gray-700 via-gray-800 to-gray-600 text-white w-full flex items-center justify-center py-24">
                <div className="text-center">
                    <h1 className="text-4xl cursor-pointer font-bold mb-6 drop-shadow-lg transition-all duration-700 transform hover:scale-105 hover:text-gray-200">
                        Welcome to ProctorMate
                    </h1>
                    <p className="text-lg mb-8 transition-opacity duration-700 opacity-100 hover:opacity-75">
                        Your one-stop solution for seamless Exam-Proctor management.
                    </p>
                    <button className="btn bg-gray-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-bold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-md">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="features py-20 px-4">
                <h2 className="text-3xl cursor-pointer font-bold text-center mb-12 text-gray-800 transition-all duration-700 transform hover:scale-105 hover:text-gray-500">
                    Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-700 transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Teacher Allocation</h3>
                <p className="text-gray-700 leading-relaxed">
                    Simplify exam logistics by effortlessly assigning the right teacher to the right hall, ensuring flawless supervision with just a few clicks.
                </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-700 transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Dynamic Scheduling</h3>
                <p className="text-gray-700 leading-relaxed">
                    Stay ahead of the curve with real-time scheduling, keeping your exam staff perfectly aligned with evolving exam needs.
                </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-700 transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Clear Communication</h3>
                <p className="text-gray-700 leading-relaxed">
                    Break down barriers and keep everyone in the loop with fast, efficient communication that tackles issues before they become problems.
                </p>
            </div>
</div>

            </section>

            {/* Call to Action Section */}
            <section className="cta bg-gray-200 py-12 w-full">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        Eager to transform your exam supervision?
                    </h2>
                    <button className="btn bg-gray-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-bold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-md">
                        <a href='/signup'>Sign Up!!</a>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Middle;
