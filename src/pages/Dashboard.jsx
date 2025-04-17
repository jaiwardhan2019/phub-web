import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import { Navbar, Sidebar } from '../components';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </main>
    </>
  );
};

export default Dashboard;
