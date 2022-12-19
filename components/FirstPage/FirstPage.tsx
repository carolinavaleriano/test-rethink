import styles from "./FirstPage.module.css";
import React from "react";
import Carousel, { sliderData } from "./Carousel/Carousel";

function FirstPage() {
  return (
    <div className={styles.container}>
      <h1>Rethink Academy</h1>
      <Carousel slides={sliderData} />
      <span>
        O Rethink Academy é uma oportunidade de estágio para estudantes
        aprenderem na prática como acontece a criação de um produto digital que
        as pessoas amam usar.
      </span>
    </div>
  );
}

export default FirstPage;
