import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Get In Touch!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/email.png")} alt="Email icon" />
                    <a href="mailto:msafinch@gmail.com">MsAFinch@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon" />
                    <a href="https://www.linkedin.com/in/sunny-finch/">Linkedin.com/sunny-finch</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/github.png")} alt="Github icon" />
                    <a href="https://github.com/0-Sunny-0">Github.com/Sunny-0</a>
                </li>
            </ul>
        </footer>
    );
};