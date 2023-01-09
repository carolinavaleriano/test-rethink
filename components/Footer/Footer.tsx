import styles from "./Footer.module.css";
import { Instagram, LinkedIn, YouTube } from "@mui/icons-material";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.sides}>
        <div className={styles.left}>
          <img src="/assets/logo-yellow.png" alt="logo yellow" />
          <div className={styles.icons}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/rethinkdigitalco/mycompany/verification/"
            >
              <LinkedIn />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@rethinktecnologia8650"
            >
              <YouTube />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/rethink.digital/"
            >
              <Instagram />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.address}>
            <h2>Belo Horizonte</h2>
            <h3>Rua Ouro Fino 395, Cruzeiro</h3>
          </div>
          <div className={styles.address}>
            <h2>Ipatinga</h2>
            <h3>Rua Carvalho 40, Horto</h3>
          </div>
        </div>
      </div>
      <span>Powered with 🤍 by Carol Valeriano</span>
    </div>
  );
}

export default Footer;
