import styles from "./SecondPage.module.css";
import React from "react";
import Card from "./Card/Card";

function SecondPage() {
  return (
    <div id="secondpage" className={styles.container}>
      <div className={styles.text}>
        <h1>Por dentro do Rethink Academy:</h1>
        <h4>Mais que um programa de estágio</h4>
      </div>
      <div className={styles.card_container}>
        <Card
          number={"1"}
          title={"Cultura Maker"}
          description={
            "Além de aprender em equipe, os estagiários também atuam na criação de um produto digital."
          }
        />
        <Card
          number={"2"}
          title={"Trilhas de Conhecimento"}
          description={
            "Os conhecimentos técnicos são compartilhados por meio de trilhas conectadas com nossos pilares de engenharia, design e produtos."
          }
        />
        <Card
          number={"3"}
          title={"Soft Skills"}
          description={
            "São realizados workshops para os estagiários aprenderem também sobre habilidades comportamentais como liderança, empatia e inovação."
          }
        />
      </div>
    </div>
  );
}

export default SecondPage;
