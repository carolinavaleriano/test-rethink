import styles from "./BackToTop.module.css";
import React from "react";
import { useEffect, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function BackToTop() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button className={styles.btn} onClick={scrollUp}>
          <ExpandLessIcon sx={{ fontSize: 40 }} />
        </button>
      )}
    </div>
  );
}

export default BackToTop;
