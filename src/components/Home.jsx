import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const Home = () => {
  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!isLoggedIn) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
      <br />
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;