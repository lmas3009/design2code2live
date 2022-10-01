import React from "react";
import styles from "./Hero.module.css";

const HeroContent = () => {
  return (
    <div className={styles.HeroContent_content}>
      <div>
        <div className={styles.heading}>UI</div>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          mini.
        </p>
      </div>
      <div>
        <div className={styles.heading}>UX</div>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim at.
        </p>
      </div>
      <div className={styles.button_container}>
        <button className={styles.button}>Register for online Webinar</button>
      </div>
    </div>
  );
};

export default HeroContent;
