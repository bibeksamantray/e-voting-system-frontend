import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      {/* Design 1: Vibrant Gradient Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 px-8 text-center text-white">
        <h1 className="text-8xl font-extrabold mb-6 drop-shadow-lg select-none">
          Welcome to E-Voting
        </h1>
        <p className="max-w-3xl text-xl tracking-wide leading-relaxed mb-10 opacity-90">
          Secure. Transparent. Accessible. Empowering your vote anywhere, anytime.
        </p>
        <div className="flex space-x-6 mb-8">
          <div className="px-8 py-3 bg-white bg-opacity-20 text-blue-500 rounded-xl cursor-default select-none font-semibold text-lg shadow-lg transform transition duration-300 hover:scale-110">
            Your voice matters
          </div>
          <div className="px-8 py-3 bg-white bg-opacity-20 text-blue-500 rounded-xl cursor-default select-none font-semibold text-lg shadow-lg transform transition duration-300 hover:scale-110">
            Vote with confidence
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
