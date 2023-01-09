import styles from "./ProjectBlock.module.css";

type ProjectBlockProps = {
  whichSide: "1" | "2";
  title: string;
  description: string;
  children: JSX.Element;
};

const ProjectBlock = ({
  whichSide,
  title,
  description,
  children,
}: ProjectBlockProps) => {
  return (
    <div className={styles.container}>
      {whichSide === "1" && (
        <div className={styles.exibition}>
          <div className={styles.text}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={styles.img}>{children}</div>
        </div>
      )}
      {whichSide === "2" && (
        <div className={styles.exibition}>
          <div className={styles.img}>{children}</div>
          <div className={styles.text}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectBlock;
