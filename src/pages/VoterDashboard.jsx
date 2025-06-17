import { Link } from 'react-router-dom';

const VoterDashboard = () => {
  return (
    <div className="min-h-screen w-full p-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
      <div className="p-4 w-full mx-auto">
        <h2 className="text-3xl font-bold mb-6">Voter Dashboard</h2>

        <div className="grid gap-4 grid-cols-1 w-300 justify-self-center">
          <Link to="/elections" className="text-center block p-4 bg-pink-600 text-white rounded shadow-lg transform transition duration-300 hover:scale-105">
            Browse Elections
          </Link>

          <Link to="/" className="text-center block p-4 bg-red-600 text-white rounded shadow-lg transform transition duration-300 hover:scale-105">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VoterDashboard;
