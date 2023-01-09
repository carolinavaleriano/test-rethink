import ProjectBlock from "./ProjectBlock/ProjectBlock";
import styles from "./ThirdPage.module.css";

function ThirdPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Projetos</h1>
        <p>
          Alguns dos principais projetos feitos pelos estagiários do{" "}
          <span className={styles.diferent_word}> Rethink Academy</span>
        </p>
      </div>
      <ProjectBlock
        whichSide={"1"}
        title={"Rethink Git"}
        description={
          "Projeto que usa API do GitHub para exibir informações de projetos de usuários."
        }
        children={
          <img src="assets/projectbyld-rethink-git.png" alt="rethink git" />
        }
      />
      <ProjectBlock
        whichSide={"2"}
        title={"Nothink"}
        description={
          "Sistema que deve permitir que o usuário crie snippets de código de forma fácil e desponibilize para todos os usuários da plataforma."
        }
        children={<img src="assets/nothink-categories.png" alt="nothink" />}
      />
      <ProjectBlock
        whichSide={"1"}
        title={"Portal Rethink Academy"}
        description={
          "Portal desenvolvido e alimentado pelos próprios estagiários com objetivo de contribuir para a evolução do programa Rethink Academy."
        }
        children={<img src="assets/portal-ra-dashboard.png" alt="portal ra" />}
      />
    </div>
  );
}

export default ThirdPage;
