import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
        <a href="home.html" rel="noopener noreferrer">Home</a>
        <a href="aboutme.html" rel="noopener noreferrer">About Me</a>
        <a href="projects.html" rel="noopener noreferrer">Projects</a>
        <a href="home.html" rel="noopener noreferrer">Skills</a>

        <div class="other-links">
            <a href="https://github.com/TEST-iz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i class="fa-brands fa-github fa-2xl"></i>
            </a>
        </div>

    </div>

    );
}
export default Navbar
