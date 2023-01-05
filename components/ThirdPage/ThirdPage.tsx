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
      <div className={styles.exibition}>
        <div className={styles.text}>
          <h2>Rethink Git</h2>
          <p>
            Projeto que usa API do GitHub para exibir informações de projetos de
            usuários.
          </p>
        </div>
        <img src="assets/projectbyld-rethink-git.png" alt="rethink git" />
      </div>
      <div className={styles.exibition}>
        <img src="assets/nothink-categories.png" alt="nothink" />
        <div className={styles.text}>
          <h2>Nothink</h2>
          <p>
            Sistema que deve permitir que o usuário crie snippets de código de
            forma fácil e desponibilize para todos os usuários da plataforma.
          </p>
        </div>
      </div>
      <div className={styles.exibition}>
        <div className={styles.text}>
          <h2>Portal Rethink Academy</h2>
          <p>
            Portal desenvolvido e alimentado pelos próprios estagiários com
            objetivo de contribuir para a evolução do programa Rethink Academy
          </p>
        </div>
        <img src="assets/portal-ra-dashboard.png" alt="portal ra" />
      </div>
    </div>
  );
}

export default ThirdPage;
