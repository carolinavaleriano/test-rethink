import styles from "./Card.module.css";

type CardProps = {
  number: string;
  title: string;
  description: string;
};

const Card = ({ number, title, description }: CardProps) => {
  return (
    <div className={styles.card}>
      <h1>{number}</h1>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
};

export default Card;
