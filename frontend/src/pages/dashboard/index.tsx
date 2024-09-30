import styles from "./styles.module.css";

const Dashboard = () => {
  return (
    <div>
      <div className={styles["header"]}>
        <h2> Dashboard</h2>
        <button
          onClick={() => {
            console.log("Create new concert");
          }}
          className={styles["createConcertBtn"]}
        >
          Create new concert
        </button>
      </div>

      <div className={styles["container"]}>
        <h3>
          Existing Concerts list with tickets quantities and remaining tickets
        </h3>

        <div>
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Concert name</th>
                <th>Total Tickets</th>
                <th>Sold Tickets</th>
                <th>Remaining Tickets</th>
                <th>Blocked tickets</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>01</td>
                <td>Cold play tickets</td>
                <td>4545</td>
                <td>4545</td>
                <td>342/3255</td>
                <th>1233</th>
                <td>
                  <span className={styles["action_btn"]}>
                    <a href="#">Edit concert tickets</a>
                    <a href="#">Copy link</a>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// 1. See the list of existing concerts and their list
// 2. Create a new concert with the can only add concert name for now
// 3. Go inside concert page and create tickets and
// if the created ticket quantity is more than 1
// then show a button in that we can add link to buy tickets for that concert.
