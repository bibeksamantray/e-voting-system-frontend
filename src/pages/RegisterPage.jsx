import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';


const RegisterPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'voter',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', form);
      alert('Registered successfully!');
      navigate('/login');
    } catch (error) {
      console.log(error)
      alert('Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 p-6">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg max-w-md w-full p-10 text-white">
        <h2 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-400 transition transform focus:scale-105"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-400 transition transform focus:scale-105"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-400 transition transform focus:scale-105"
            value={form.password}
            onChange={handleChange}
            required
          />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-90 text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-400 transition"
          >
            <option value="voter">Voter</option>
            <option value="admin">Admin</option>
          </select>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-400 font-semibold text-white transition transform hover:-translate-y-1"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-black text-sm">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-pink-600 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
