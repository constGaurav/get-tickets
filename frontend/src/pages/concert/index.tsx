import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import TicketModal from "./ticket-modal";

const Concert = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { concertId = "" } = useParams();

  console.log("concertId", concertId);

  return (
    <>
      <div>
        <div className={styles["header"]}>
          <h2> Concert name</h2>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className={styles["addNewTicketBtn"]}
          >
            Add new ticket
          </button>
        </div>
        <div className={styles["container"]}>
          <h3>
            Concert tickets list with tickets quantities and remaining tickets
          </h3>

          <div>
            <table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Ticket name</th>
                  <th>Quantity</th>
                  <th>Sold-out quantity</th>
                  <th>Remaining Tickets</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>01</td>
                  <td>Cold play tickets</td>
                  <td>4545</td>
                  <td>4545</td>
                  <th>1233</th>
                  <td>
                    <span className={styles["action_btn"]}>
                      <button onClick={() => null}>Edit concert tickets</button>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TicketModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Concert;
