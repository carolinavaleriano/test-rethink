import React, { useState } from "react";
import styles from "./Carousel.module.css";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";

export const sliderData = [
  {
    image: "assets/rethinkers.jpg",
    alt: "Rethinkers",
  },
  {
    image: "assets/designers.jpg",
    alt: "designers",
  },
  {
    image: "assets/engenharia.jpg",
    alt: "engenharia",
  },
  {
    image: "assets/produtos.jpg",
    alt: "produtos",
  },
];

const Carousel = ({ slides }: { slides: any }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={styles.slider}>
      <ArrowCircleLeft className={styles.left_arrow} onClick={prevSlide} />
      <ArrowCircleRight className={styles.right_arrow} onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? styles.slide_active : styles.slide}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt={slide.alt} className={styles.image} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
