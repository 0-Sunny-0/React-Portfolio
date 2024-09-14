import React from "react";
import styles from "/About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="me in AI" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  Frontend Developer with experience in building responsive and optimized websites.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
              <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>
                  Have designed multiple wireframes for class projects, assignments, and self lead side projects.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
};