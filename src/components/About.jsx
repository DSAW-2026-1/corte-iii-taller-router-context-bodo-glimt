import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const About = () => {
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
    return null;
  }

  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default About;