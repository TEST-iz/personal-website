import styles from "./home.module.css";
import pfp from "../assets/test.jpg";

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
                                    <p>I really hate school and love to sleep!</p>
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
                </div>
            </div>
        </section>
    );
} 

export default Home;