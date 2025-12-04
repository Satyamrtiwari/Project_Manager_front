import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const About = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">ProjectTracker</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/" className="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </Link>
                <Link to="/about" className="border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  About Us
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white focus:outline-none"
              >
                {darkMode ? (
                  <SunIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <MoonIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
              <div className="ml-4 flex items-center space-x-3">
                <Link to="/login" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
                <Link to="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* About Content */}
      <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              About ProjectTracker
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Our mission is to help you manage your projects efficiently and effectively.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Story</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  ProjectTracker was created with a simple goal: to make project management accessible to everyone. 
                  We believe that effective task management is the key to productivity and success.
                </p>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  Our team of dedicated developers and designers has worked tirelessly to create a platform that is 
                  both powerful and easy to use. We're constantly improving and adding new features based on user feedback.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Values</h3>
                <ul className="mt-4 space-y-4 text-gray-500 dark:text-gray-300">
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Simplicity:</strong> We believe in keeping things simple and intuitive.</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Efficiency:</strong> Our tools are designed to help you work smarter, not harder.</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Accessibility:</strong> We strive to make our platform accessible to everyone.</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Innovation:</strong> We're constantly looking for ways to improve and innovate.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Meet the Team</h3>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Alex Johnson</h4>
                  <p className="text-gray-500 dark:text-gray-300">Founder & CEO</p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Sarah Chen</h4>
                  <p className="text-gray-500 dark:text-gray-300">Lead Developer</p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Michael Rodriguez</h4>
                  <p className="text-gray-500 dark:text-gray-300">UX Designer</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ready to get started?</h3>
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <Link to="/register" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Create an account
                  </Link>
                </div>
                <div className="ml-3 inline-flex">
                  <Link to="/login" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex justify-between">
            <p className="text-base text-gray-500 dark:text-gray-300">
              &copy; {new Date().getFullYear()} ProjectTracker. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                Home
              </Link>
              <Link to="/login" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                Login
              </Link>
              <Link to="/register" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                Register
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;