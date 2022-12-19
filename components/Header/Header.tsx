import styles from "./Header.module.css";

import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.container}>
      <img src="/assets/logo.png" alt="rethink logo" />
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
      </div>
    </div>
  );
}

export default Header;
