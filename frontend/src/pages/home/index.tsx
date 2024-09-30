import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["mainContainer"]}>
      <h1>Create your concert tickets</h1>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
        className={styles["button"]}
      >
        Create tickets
      </button>
    </div>
  );
};

export default Home;
