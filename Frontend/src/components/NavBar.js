import './../styles/style.css';
import { NavLink,  useLocation, useNavigate} from 'react-router-dom';

function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
  
    const scrollToSection = (id) => {
      if (location.pathname !== '/') {
        // Navigate home first, then scroll after a short delay
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100); // delay to wait for DOM to render
      } else {
        // Already on home page
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return(
        <div className="nav_bar">
            <div className='logo'> </div>
            <ul>
                <li><button onClick={() => scrollToSection('home')}>Accueil</button></li>
                <li><NavLink to="/about">About Me</NavLink></li>
                <li><button onClick={() => scrollToSection('projects')}>My Projects</button></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            
        </div>
    );
}

export default NavBar;