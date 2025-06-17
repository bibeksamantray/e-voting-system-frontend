import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-800 text-white p-4 flex justify-between items-center fixed top-0 w-full z-50">
      <div className="space-x-4">
        {user && <Link to="/welcome" className="hover:none">Home</Link>}
        {user && <Link to="/elections" className="hover:none">Elections</Link>}
        {user?.role === 'admin' && (
          <>
            <Link to="/create" className="hover:none">Create</Link>
            <Link to="/update-status" className="hover:none">Update Status</Link>
            <Link to="/admin" className="none">Admin</Link>
          </>
        )}
        {user?.role === 'voter' && <Link to="/voter" className="hover:none">Voter</Link>}
      </div>
      <div className="space-x-4 justify-end">
        {!user ? (
           <>
            {/* <Link to="/login" className="hover:not-[]:">Login</Link>
            <Link to="/register" className="hover:not-[]:">Register</Link> */}
          </>
        ) : (
          <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded justify-end">Logout</button>
        )}
      </div>
  </nav>
  );
};

export default Navbar;
