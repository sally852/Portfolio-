import './../styles/style.css';
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';


function Footer() {
    return(
        <div className="footer">
            <div> Amina Sally </div>
            <ul>
                <li>Accueil</li>
                <li>About Me</li>
                <li>My Projects</li>
                <li>Contact</li>
            </ul>
            <div className="social-icons">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                     <FaLinkedinIn />
                </a>
            </div>
 
        </div>
    );
}
export default Footer;