import styles from "./home.module.css";
import pfp from "../assets/test.jpg";
import gameplay2 from "../assets/gameplay2.webp";
import pong from "../assets/pong.webp";
import { Link } from "react-router";


function Home() {
    return (
        <section>
            <div className={styles.frame}>
                <div className={styles.leftFrame}>
                    <div className={styles.section}>
                        <div className={styles.intro}>
                            <div className={styles.profilePic}>
                                <img src={pfp} alt="yeah thats me" height="200px" width="100px" />
                            </div>

                            <div className={styles.introContent}>
                                <div className={styles.introTitle}>
                                    <h3>Hey y'all, Eric Here!</h3>
                                </div>
                                <div className={styles.introShort}>
                                    <p>Student at the University of Maryland. Passionate about Computer Science and Mathematics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`${styles.section} ${styles.contact}`}>
                        <div className={styles.contactInfo}>
                            <h1>Contact & Resume</h1>
                            <hr className={styles.hr} />
                            <ul>
                                <li>email</li>
                                <li>github</li>
                                <li>linkedin</li>
                                <li>resume</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className={`${styles.section} ${styles.projects}`}>
                    <h2> Projects </h2>
                    <div className={styles.projectlist}>
                        <div className={styles.featuredproject}>
                            <img className={styles.projectImage} src={gameplay2} alt="screenshot" />
                            <h3>Zombie Survival Game</h3>
                            <p>
                                A 2D overhead zombie survival game developed using GDScript and the Godot Engine. Utilized
                                object oriented programming principles to create the game. Implemented various gameplay elements 
                                such as player movement, enemy AI, random spawning, weapon systems, and health management. 
                            </p>
                        </div>
                        <div className={styles.featuredproject}>
                            <img className={styles.projectImage} src={pong} alt="screenshot" />
                            <h3>Chip8 Interpreter</h3>
                            <p>
                                An emulator for the Chip8 Interpreter system developed using C++, the SDL2 graphics library, and Catch2 for unit testing.
                                Utilized OOP to separate graphics and cpu tasks. Simulated basic computer architecture like memory, registers, opcodes, I/O devices, etc.
                            </p>
                        </div>
                    </div>
                    <div className={styles.clickables}>
                        <Link to="/projects" className={styles.gotoprojects}>View All Projects &#8594;</Link>
                    </div>
                </div>
            </div>
        </section>
    );
} 

export default Home;