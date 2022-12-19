import styles from "./Header.module.css";

import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.container}>
      <a href="/">
        <img src="/assets/logo.png" alt="rethink logo" />
      </a>
      <div className={styles.header_btn}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/about">
          Sobre
        </Link>
        <Link className={styles.link} href="/projects">
          Projetos
        </Link>
        <Link className={styles.link} href="/events">
          Eventos
        </Link>
        <Link className={styles.link} href="/team">
          Equipe
        </Link>
      </div>
    </div>
  );
}

export default Header;
