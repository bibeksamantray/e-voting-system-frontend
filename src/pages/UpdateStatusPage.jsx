import { useState, useEffect, useContext } from 'react';
import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';

const UpdateStatusPage = () => {
  const { user } = useContext(AuthContext);
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchElections = async () => {
      try {
        const res = await axios.get('/api/elections', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setElections(res.data);
      } catch (err) {
        console.error('Error fetching elections:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchElections();
  }, [user.token]);

  const handleStatusUpdate = async (id, isActive) => {
    try {
      await axios.put(
        `/api/elections/${id}/status`,
        { isActive }, // Send the boolean value
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setElections((prev) =>
        prev.map((e) => (e._id === id ? { ...e, isActive } : e))
      );
    } catch (err) {
      console.error('Failed to update status:', err);
      alert('Failed to update status');
    }
  };

  if (loading) return <div className="p-4">Loading elections...</div>;

return (

  <div className="min-h-screen w-full p-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"> 
    <div className="p-4 mt-15 bg-blue-800 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Update Election Status</h2>
      {elections.map((election) => (
        <div
          key={election._id}
          className="border border-gray-300 p-4 mb-3 rounded bg-white shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-800">{election.title}</h3>
          <p className="mb-2 text-gray-700">
            Current Status: {election.isActive ? 'Active' : 'Inactive'}
          </p>
          <div className="flex items-center space-x-3">
            <span className="text-gray-800 font-medium select-none">
              {election.isActive ? 'Active' : 'Inactive'}
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={election.isActive}
              tabIndex={0}
              onClick={() => handleStatusUpdate(election._id, !election.isActive)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                election.isActive ? 'bg-red-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  election.isActive ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className="text-gray-600 select-none cursor-pointer"
              onClick={() => handleStatusUpdate(election._id, !election.isActive)}
            >
              {election.isActive ? 'Set Inactive' : 'Set Active'}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>

  
);


};

export default UpdateStatusPage;
