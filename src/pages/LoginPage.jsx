import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      setUser(res.data);
      navigate('/welcome');
    } catch (error) {
      console.log(error);
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-500 to-teal-400 p-6">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg max-w-md w-full p-10 text-white">
        <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 bg-clip-text text-transparent drop-shadow-md">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-400 transition transform focus:scale-105"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-400 transition transform focus:scale-105"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 font-semibold text-white transition transform hover:-translate-y-1"
            aria-label="Log in"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-black text-sm">
          Don’t have an account?{' '}
          <Link
            to="/register"
            className="text-pink-600 font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
