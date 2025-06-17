import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ElectionsPage from '../pages/ElectionsPage';
import ElectionDetailsPage from '../pages/ElectionDetailsPage';
import CreateElectionPage from '../pages/CreateElectionPage';
import UpdateStatusPage from '../pages/UpdateStatusPage';
import AdminDashboard from '../pages/AdminDashboard';
import VoterDashboard from '../pages/VoterDashboard';
import NotFoundPage from '../pages/NotFoundPage';
import Navbar from '../components/Navbar';
import Welcome from '../pages/welcome';

const ProtectedRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
};

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/welcome"
          element={
              <Welcome />
          }
        />

        {/* Protected Routes */}
        <Route
          path="/elections"
          element={
            <ProtectedRoute>
              <ElectionsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/elections/:id"
          element={
            <ProtectedRoute>
              <ElectionDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute role="admin">
              <CreateElectionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-status"
          element={
            <ProtectedRoute role="admin">
              <UpdateStatusPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/voter"
          element={
            <ProtectedRoute role="voter">
              <VoterDashboard />
            </ProtectedRoute>
          }
        />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
