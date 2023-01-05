import FirstPage from "../components/FirstPage/FirstPage";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SecondPage from "../components/SecondPage/SecondPage";
import ThirdPage from "../components/ThirdPage/ThirdPage";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <Footer />
    </div>
  );
}
