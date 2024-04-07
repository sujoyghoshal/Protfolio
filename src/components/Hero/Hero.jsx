import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sujoy</h1>
        <p className={styles.description}>
        Hello, I'm Sujoy, a passionate and skilled Full Stack Developer with expertise in Node.js, JavaScript, and React.js.
        With a strong foundation in both front-end and back-end technologies, I bring a holistic approach to web development!
        </p>
        <a href="mailto:sujoyghoshal.s@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/myphoto.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
