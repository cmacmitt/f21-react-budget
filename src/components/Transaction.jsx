import styles from "./Transaction.module.css";

const Transaction = ({ type, details, totalIncome }) => {
  const { id, description, amount, date } = details;
  const formattedDate = new Date(date).toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const percentage = ((amount / totalIncome) * 100).toFixed();

  return (
    <div className={styles.item} data-transaction-id={id}>
      <div className={styles.description}>{description}</div>
      <div className="right">
        <div className={styles.value}>
          {type === "income" ? "+" : "-"} ${amount.toFixed(2)}
        </div>
        {type === "expense" && (
          <div className={styles.percentage}>
            {percentage === "Infinity" ? "-" : percentage}%
          </div>
        )}
        <div className={styles.delete}>
          <button className={styles["delete--btn"]}>
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
      <div className={styles.date}>{formattedDate}</div>
    </div>
  );
};

export default Transaction;
