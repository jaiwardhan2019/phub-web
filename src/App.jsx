import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard, Login, NotFound } from './pages';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
