/* eslint-disable no-unused-vars */
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      <div className="w-full max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About ProctorMate</h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          At ProctorMate, we are dedicated to ensuring a seamless and secure examination process for students and institutions. Our innovative platform combines advanced technology with a commitment to academic integrity, empowering educational institutions to maintain the highest standards during assessments.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-8 mb-12 transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our mission is to revolutionize the assessment landscape by providing institutions with a reliable and user-friendly proctoring solution. We aim to enhance the examination experience for students while ensuring the highest levels of security and integrity in the assessment process.
        </p>
      </div>

      {/* Team Section */}
      <div className="w-full max-w-6xl mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300">
            <img
              className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-teal-500"
              src='https://tse2.mm.bing.net/th?id=OIP.PF1vjNJhj42rO9rcQGGNqQHaHa&pid=Api&P=0&h=180'
              alt="John Doe"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
            <p className="text-gray-500 mt-2">
              John leads ProctorMate with a vision to transform the way exams are conducted, ensuring fairness and transparency.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300">
            <img
              className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-teal-500"
              src='https://tse3.mm.bing.net/th?id=OIP.MGYgU-AlH_ihmFEHTOCcJwHaLH&pid=Api&P=0&h=180'
              alt="Jane Smith"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
            <p className="text-gray-500 mt-2">
              Jane is the tech mastermind behind ProctorMate, ensuring that our platform utilizes the latest advancements in technology for secure online proctoring.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300">
            <img
              className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-teal-500"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDg3fHx3b21hbnxlbnwwfHx8fDE2NjMxMjA0MTM&ixlib=rb-1.2.1&q=80&w=400"
              alt="Emily Johnson"
            />
            <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
            <p className="text-gray-600">Head of Marketing</p>
            <p className="text-gray-500 mt-2">
              Emily drives ProctorMates marketing strategy with creativity and passion, connecting educational institutions with our innovative solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-8 mb-12 transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h2>
        <ul className="text-gray-600 text-lg list-disc pl-5">
          <li className="mb-2">Integrity: We uphold the highest standards of integrity in everything we do, ensuring trust and transparency in assessments.</li>
          <li className="mb-2">Innovation: We embrace innovation and continuously enhance our platform to meet the evolving needs of educational institutions.</li>
          <li className="mb-2">Customer-Centric: Our customers are at the heart of what we do, and we strive to provide exceptional support and solutions.</li>
          <li>Collaboration: We believe in fostering collaboration between our team and our clients to achieve the best outcomes in proctoring.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
