import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router";

function Navbar() {
    return (
        <div className="navbar">
        <Link to="home">Home</Link>
        <Link to="aboutme">About Me</Link>
        <Link to="projects">Projects</Link>
        <Link to="home">Skills</Link>

        <div class="other-links">
            <a href="https://github.com/TEST-iz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} size="2xl" />
            </a>
        </div>

    </div>

    );
}
export default Navbar
