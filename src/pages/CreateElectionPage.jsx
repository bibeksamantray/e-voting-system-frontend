import { useState, useContext } from 'react';
import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';

const CreateElectionPage = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    candidates: '',
  });
  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      candidates: form.candidates.split(',').map((name) => ({ name: name.trim() })),
    };

    try {
      await axios.post('/api/elections', payload, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      alert('Election created successfully!');
    } catch (error) {
      console.error('Failed to create election:', error);
    }
  };

  return (
    <div className="min-h-screen w-full p-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"> 
      <div className="mt-18 p-5 max-w-lg mx-auto bg-blue-800 rounded-3xl shadow-2xl">
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl p-8">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-800">
            Create Election
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-4 border border-blue-300 rounded-xl placeholder-black focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="w-full p-4 border border-blue-300 rounded-xl placeholder-black focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition resize-none min-h-[100px]"
            />
            <div className="grid grid-cols-2 gap-6">
              <input
                name="startDate"
                type="date"
                value={form.startDate}
                onChange={handleChange}
                className="w-full p-4 border border-blue-300 rounded-xl placeholder-black focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition"
                required
              />
              <input
                name="endDate"
                type="date"
                value={form.endDate}
                onChange={handleChange}
                className="w-full p-4 border border-blue-300 rounded-xl placeholder-black focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition"
                required
              />
            </div>
            <input
              name="candidates"
              placeholder="Candidates (comma separated)"
              value={form.candidates}
              onChange={handleChange}
              className="w-full p-4 border border-blue-300 rounded-xl placeholder-black focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition"
              required
            />
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-blue-800 text-white font-bold shadow-lg hover:bg-blue-900 transition duration-300"
            >
              Create Election
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateElectionPage;
