import styles from "./Header.module.css";

import React from "react";
import { Link } from "react-scroll/modules";
import SecondPage from "../SecondPage/SecondPage";

function Header() {
  return (
    <div className={styles.container}>
      <a href="/">
        <img src="/assets/logo.png" alt="rethink logo" />
      </a>
      <div className={styles.header_btn}>
        <Link
          className={styles.link}
          href="/"
          activeClass="active"
          to="firstpage"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Home
        </Link>
        <Link
          className={styles.link}
          href="/"
          activeClass="active"
          to="secondpage"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
        >
          Sobre
        </Link>
        <Link
          className={styles.link}
          href="/"
          activeClass="active"
          to="thirdpage"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Projetos
        </Link>
        <Link
          className={styles.link}
          href="/"
          activeClass="active"
          to="fourthpage"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Eventos
        </Link>
        <Link
          className={styles.link}
          href="/"
          activeClass="active"
          to="fifthpage"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Equipe
        </Link>
      </div>
    </div>
  );
}

export default Header;
