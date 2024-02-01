import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <header className={styles.header}>
      <h1>Readify</h1>
      <h2>Unlock your speed reading.</h2>
      <Link to="/login">
        <button>Continue to application</button>
      </Link>
    </header>
  );
};

export default Home;
