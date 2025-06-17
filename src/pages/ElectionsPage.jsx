import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';

const ElectionsPage = () => {
  const [elections, setElections] = useState([]);

  useEffect(() => {
    const fetchElections = async () => {
      try {
        const res = await axios.get('/api/elections');
        setElections(res.data);
      } catch (err) {
        console.error('Failed to fetch elections:', err);
      }
    };

    fetchElections();
  }, []);

 return (
    <div className="min-h-screen w-full p-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
      <div className="p-4 mt-18 bg-blue-800 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-white">Ongoing Elections</h2>
        {elections.length === 0 ? (
          <p className="text-lg text-gray-300">No elections found.</p>
        ) : (
          elections.map((election) => (
            <div key={election._id} className="border border-gray-300 p-4 mb-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">{election.title}</h3>
              <p className="text-gray-700 mb-2">{election.description}</p>
              <Link
                to={`/elections/${election._id}`}
                className="text-blue-600 hover:text-blue-800 transition duration-200"
              >
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ElectionsPage;
