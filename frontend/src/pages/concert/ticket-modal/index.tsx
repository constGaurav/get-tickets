import { useState } from "react";
import styles from "./styles.module.css";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const TicketModal = ({ isOpen, setIsOpen }: Props) => {
  const [concertName, setConcertName] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Name:", name);
    // Handle form submission logic
    toggleModal();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <button className={styles["close-button"]} onClick={toggleModal}>
          &times;
        </button>
        <h2>Create ticket</h2>
        <form onSubmit={handleSubmit} className={styles["form"]}>
          <label htmlFor="ticketName">Name </label>
          <input
            type="text"
            id="ticketName"
            value={concertName}
            onChange={(e) => setConcertName(e.target.value)}
            required
          />
          <button type="submit" className={styles["submit-button"]}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TicketModal;
