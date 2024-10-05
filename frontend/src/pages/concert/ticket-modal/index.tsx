import { useState } from "react";
import styles from "./styles.module.css";
import { ICreateOrEditTicket } from "../types";
import { validateTicketData } from "./config";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function TicketModal({ isOpen, onClose }: Props) {
  const [errorMsg, setErrorMsg] = useState<string>();
  const [ticket, setTicket] = useState<ICreateOrEditTicket>({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    startDateTime: "",
    endDateTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setErrorMsg(undefined);
    const { name, value } = e.target;
    setTicket((prevTicket) => ({
      ...prevTicket,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateTicketData(ticket);
    if (error) {
      setErrorMsg(error);
      return;
    }

    console.log("Submitted ticket:", ticket);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-header"]}>
          <h2 className={styles["modal-title"]}>Create Ticket</h2>
          <button className={styles["close-button"]} onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={ticket.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={ticket.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={ticket.price}
              onChange={handleChange}
              step="0.01"
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={ticket.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="startDateTime">Sale Start Date</label>
            <input
              type="datetime-local"
              id="startDateTime"
              name="startDateTime"
              value={ticket.startDateTime}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="endDateTime">Sale End Date</label>
            <input
              type="datetime-local"
              id="endDateTime"
              name="endDateTime"
              value={ticket.endDateTime}
              onChange={handleChange}
              required
            />
          </div>
          {errorMsg && <p className={styles["error-message"]}>{errorMsg}</p>}
          <button type="submit" className={styles["submit-button"]}>
            Create Ticket
          </button>
        </form>
      </div>
    </div>
  );
}
