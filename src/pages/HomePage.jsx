import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 via-pink-600 to-blue-700 px-8 text-center text-white">
        <h1 className="text-7xl font-extrabold mb-6 drop-shadow-lg select-none max-w-4xl">
          Welcome to the E-Voting System
        </h1>
        <p className="max-w-xl text-xl tracking-wide leading-relaxed mb-10">
          Empowering your vote with confidence and clarity. Join us in shaping the future of democracy.
        </p>
        <div className="flex gap-6">
          <Link
            to="/login"
            className="px-8 py-3 rounded-full bg-white text-red-600 font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-8 py-3 rounded-full bg-white text-red-600 font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Register
          </Link>
        </div>
      </section>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} E-Voting System. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default HomePage;
