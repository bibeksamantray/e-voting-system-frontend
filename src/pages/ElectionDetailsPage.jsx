import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';

const ElectionDetailsPage = () => {
  const { id } = useParams();
  const [election, setElection] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchElection = async () => {
      try {
        const res = await axios.get(`/api/elections/${id}`);
        setElection(res.data);
      } catch (error) {
        console.error('Error fetching election:', error);
      }
    };

    fetchElection();
  }, [id]);

 const handleVote = async () => {
  try {
    await axios.post(
      '/api/votes',
      {
        electionId: id,
        candidate: selectedCandidate,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    alert('Vote cast successfully!');
  } catch (error) {
    console.error("Error casting vote:", error.response.data);
    alert(`failed to cast vote`);
  }
};


  if (!election) return <div className="p-4">Loading election details...</div>;

 return (
  <div className="min-h-screen w-full p-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
    <div className="p-6 bg-blue-900 rounded-lg mt-18">
      <h2 className="text-2xl font-bold mb-4 text-white">{election.title}</h2>
      <p className="mb-4 text-gray-200">{election.description}</p>

      <h3 className="text-lg font-semibold mb-2 text-white">Candidates:</h3>
      {election.candidates.map((c) => (
        <label key={c.name} className="block mb-1 text-gray-200">
          <input
            type="radio"
            name="candidate"
            value={c.name}
            onChange={() => setSelectedCandidate(c.name)}
            className="mr-2"
          />{' '}
          {c.name} {c.party ? `(${c.party})` : ''}
        </label>
      ))}

      <button
        onClick={handleVote}
        disabled={!selectedCandidate}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Cast Vote
      </button>
    </div>
    </div>
  );
};

export default ElectionDetailsPage;
