import { Link } from '@inertiajs/react';
import { Mail, Phone } from 'lucide-react';

export default function EntryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      {/* Header/Navigation */}
      <title> Street Light</title>
      <header className="bg-white dark:bg-gray-800 py-2 px-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center">
          <span className="text-blue-600 font-bold text-xl">SMART LIGHT</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            Testimonials
          </a>
          <Link
            href="/signin"
            className="bg-blue-600 text-white px-4 py-1 rounded-md"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-3">
          Smart Street Light Monitoring System
        </h1>
        <p className="mb-8 max-w-2xl mx-auto">
          Optimize your street lighting with IoT technology for energy
          efficiency and proactive maintenance.
        </p>
        <Link
          href="/signin"
          className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Energy Efficiency</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Reduce energy consumption by adjusting light intensity based on
              real-time conditions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 20V10M18 20V4M6 20v-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Real-Time Monitoring</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Monitor the operational status of individual lights effectively.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Proactive Maintenance</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Receive alerts for maintenance needs to ensure optimal
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2 text-center text-gray-900 dark:text-white">
              Step 1: Data Collection
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
              Ambient light and motion sensors collect data in real-time.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2 text-center text-gray-900 dark:text-white">
              Step 2: Data Transmission
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
              Data is transmitted to the cloud for analysis.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2 text-center text-gray-900 dark:text-white">
              Step 3: Dynamic Adjustment
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
              Light intensity is adjusted based on analyzed data.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 dark:text-gray-300 mb-4 italic text-sm">
              "This system has transformed our street lighting and reduced our
              energy costs significantly."
            </p>
            <p className="font-medium text-sm text-gray-900 dark:text-white">- John Doe</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 dark:text-gray-300 mb-4 italic text-sm">
              "Proactive maintenance alerts have made our city safer and more
              efficient."
            </p>
            <p className="font-medium text-sm text-gray-900 dark:text-white">- Jane Smith</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 dark:text-gray-300 mb-4 italic text-sm">
              "Real-time monitoring gives us peace of mind that our lighting is
              always optimal."
            </p>
            <p className="font-medium text-sm text-gray-900 dark:text-white">- Alex Johnson</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Links */}
          <div>
            <h3 className="text-blue-400 font-medium mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-blue-400">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Contact */}
          <div>
            <h3 className="text-blue-400 font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>smartstreetlight@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+1(888)123-4567</span>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div>
            <h3 className="text-blue-400 font-medium mb-4">Follow us</h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-500"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-500"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-blue-800 p-2 rounded-full hover:bg-blue-700"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-12">
          COPYRIGHT © 2025 SMART LIGHT | ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
}
