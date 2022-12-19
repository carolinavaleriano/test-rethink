import styles from "./FirstPage.module.css";
import React from "react";
import Carousel, { sliderData } from "./Carousel/Carousel";

function FirstPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>
          <h1>Rethink</h1>
          <h2>Academy</h2>
        </div>
        <p>
          O <span className={styles.diferent_word}>Rethink Academy</span> é uma
          oportunidade de estágio nas áreas de{" "}
          <span className={styles.diferent_word}>
            design, engenharia e produtos
          </span>{" "}
          para estudantes aprenderem na prática como acontece a criação de um
          produto digital que as pessoas amam usar.
        </p>
      </div>
      <div className={styles.right}>
        <Carousel slides={sliderData} />
      </div>
    </div>
  );
}

export default FirstPage;
