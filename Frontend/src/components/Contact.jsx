import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Contact Us</h1>

      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
        {/* Contact Info Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If you have any questions or need help, feel free to contact us. We are happy to assist you.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-4" />
              <p>Email: <span className="font-medium">iit@gmail.com</span></p>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <FontAwesomeIcon icon={faPhone} className="h-4 w-4 mr-4" />
              <p>Phone: <span className="font-medium">+91-9876543210</span></p>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4 mr-4" />
              <p>Address: <span className="font-medium">123 Street, Indore, India</span></p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Send Us a Message</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2" htmlFor="name">Name</label>
              <input
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2" htmlFor="email">Email</label>
              <input
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
