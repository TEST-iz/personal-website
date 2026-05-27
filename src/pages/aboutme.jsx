import styles from "./aboutme.module.css";
import pfp from "../assets/test.jpg";

function AboutMe() {
    return (
        <section>
            <section className={styles.container}>
                <div className={`${styles.section} ${styles.info}`}>
                    <img className={styles.pfp} src={pfp} alt="test" height="350px" width="350px" />
                    
                    <div className={styles.contact}>
                        <h1>Contact</h1>
                        <hr className={styles.hr} />
                        <ul>
                            <li>email</li>
                            <li>github</li>
                            <li>linkedin</li>
                        </ul>
                    </div>
                </div>
                
                <div className={styles.aboutme}>
                    <h1>About Me</h1>
                    <article>
                        Heya! I'm Eric, a student currently studying Computer Science at the University of Maryland.
                        Learning about how technology works and how to create your own little, cool things have always sparked interest 
                        in me since I was little. My dream is to be capable enough one day to create many of my ideas into reality.
                    </article>
                    <br />
                    <article>
                        Outside of computer science and tech, I love reading about history and learning about geography. Reading about the past
                        is almost like transporting yourself into a brand new world with how different, yet similar the world was.
                        My favourite topic to read about are the Victorian and Edwardian eras.
                    </article>
                    <br />
                    <article>
                        To relax, I really enjoy playing video games and both listening and playing music. I mainly play Minecraft,
                        Nintendo games, and anything my friends recomend. I've also been playing trumpet for 8 years now, and have also dabbled
                        in singing too.
                    </article>
                </div>
            </section>
        </section>
    );
}

export default AboutMe;