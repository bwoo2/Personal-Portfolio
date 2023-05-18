import { useNavigate } from 'react-router-dom';
import '../style/Nav.css'

const Nav = () => {
  const navigate = useNavigate();
  
  return (
    <nav>
      <div className="left">
        <button onClick={() => navigate('/')}>Home</button>
      </div>
      <div className="right">
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/experience')}>Experience</button>
        <button onClick={() => navigate('/projects')}>Projects</button>
        <button onClick={() => navigate('/contact')}>Contact</button>
      </div>
    </nav>
  );
}

export default Nav;

