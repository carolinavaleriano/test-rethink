import styles from "./SecondPage.module.css";
import React from "react";

function SecondPage() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Por dentro do Rethink Academy:</h1>
        <h4>Mais que um programa de estágio</h4>
      </div>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <h2>Cultura Maker</h2>
          <h3>
            Além de aprender em equipe, os estagiários também atuam na criação
            de um produto digital.
          </h3>
        </div>
        <div className={styles.card}>
          <h2>Trilhas de Conhecimento</h2>
          <h3>
            Os conhecimentos técnicos são compartilhados por meio de trilhas,
            conectadas com nossos pilates de engenharia, design e produtos.
          </h3>
        </div>
        <div className={styles.card}>
          <h2>Soft Skills</h2>
          <h3>
            São realizador workshops para os estagiários aprenderem também sobre
            habilidades comportamentais como liderança, empatia e inovação.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
