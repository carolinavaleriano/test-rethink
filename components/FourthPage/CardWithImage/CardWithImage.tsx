import styles from "./CardWithImage.module.css";

type CardImageProps = {
  image: JSX.Element;
  title: string;
  description: string;
};

const CardWithImage = ({ image, title, description }: CardImageProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>{image}</div>
      <h2>{title}</h2>
      <h4>{description}</h4>
    </div>
  );
};

export default CardWithImage;
