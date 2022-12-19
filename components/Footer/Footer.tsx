import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <img src="/assets/logo-yellow.png" alt="logo yellow" />
      <span>Powered with 🤍 by Carol Valeriano</span>
    </div>
  );
}

export default Footer;
