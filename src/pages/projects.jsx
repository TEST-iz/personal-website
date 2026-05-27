import styles from "./projects.module.css";
import gameplay2 from "../assets/gameplay2.webp";
import pong from "../assets/pong.webp"

function Projects() {
    return (
        <section>
            <div className={styles.topFrame}>
                <div className={styles.header}>
                    <h1>Projects</h1>
                </div>
            </div>
            
            <div className={styles.content}>
                <div className={`${styles.project} ${styles.section} ${styles.one}`}>
                    <img className={styles.projectImage} src={gameplay2} alt="screenshot" />
                    <h3>Zombie Survival Game</h3>
                    <p>
                        A 2D overhead zombie survival game developed using GDScript and the Godot Engine. Utilized
                        object oriented programming principles to create the game. Implemented various gameplay elements 
                        such as player movement, enemy AI, random spawning, weapon systems, and health management. 
                    </p>
                    <div className={styles.clickables}>
                        <a className={styles.button} href="https://test-iz.github.io/Zombie-Survival-Game/" target="_blank" rel="noopener noreferrer">Try Me Out!</a>
                        <a className={`${styles.button} ${styles.repo}`} href="https://github.com/TEST-iz/Zombie-Survival-Game" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fa-brands fa-github fa-2xl"></i>
                        </a>
                    </div>
                </div>
                <div className={`${styles.project} ${styles.section}`}>
                    <img className={styles.projectImage} src={pong} alt="screenshot" />
                    <h3>Chip8 Interpreter</h3>
                    <p>
                        An emulator for the Chip8 Interpreter system developed using C++, the SDL2 graphics library, and Catch2 for unit testing.
                        Utilized OOP to separate graphics and cpu tasks. Simulated basic computer architecture like memory, registers, opcodes, I/O devices, etc.
                    </p>
                    <div className={styles.clickables}>
                        <a className={`${styles.button} ${styles.repo}`} href="https://github.com/TEST-iz/chip8-interpreter" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fa-brands fa-github fa-2xl"></i>
                        </a>
                    </div>
                </div>
                <div className={`${styles.project} ${styles.section}`}>
                    <h3>Gameboy Emulator</h3>
                    <p>Currently in progress</p>
                </div>
                <div className={`${styles.project} ${styles.section}`}>
                    <h3>Paper Trading AI</h3>
                    <p>Currently in progres. Either paper trading or training an AI to play a game</p>
                </div>
                <div className={`${styles.project} ${styles.section}`}>
                    <h3>Hardware Project</h3>
                    <p>IDK man custom emulator or something grr</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;