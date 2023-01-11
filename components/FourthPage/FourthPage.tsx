import styles from "./FourthPage.module.css";
import CardWithImage from "./CardWithImage/CardWithImage";

function FourthPage() {
  return (
    <div id="fourthpage" className={styles.container}>
      <div className={styles.text}>
        <h1>Eventos</h1>
        <h4>Eventos importantes que aconteceram no Rethink Academy</h4>
      </div>
      <div className={styles.cards}>
        <CardWithImage
          image={<img src={"./assets/alle-petra.jpg"} />}
          title={"Curso de Métodos Ágeis"}
          description={
            "Curso com Alle Petra com aprendizagem de métodos ágeis, cultura ágil, como aplicá-la na prática e muito mais."
          }
        />
        <CardWithImage
          image={<img src={"assets/lou.jpg"} />}
          title={"Soft Skills"}
          description={
            "Encontros em formatos de workshops com a Lou com foco no aprendizado de formas de aprimorar suas soft skills."
          }
        />
        <CardWithImage
          image={<img src={"assets/formatura.jpg"} />}
          title={"Formatura R.A"}
          description={
            "Evento de encerramento da turma de 2022 onde os estagiários apresentaral o produto criado nos seis meses de estágio."
          }
        />
      </div>
    </div>
  );
}

export default FourthPage;
