import styles from "./Transaction.module.css";

const Transaction = ({ type }) => {
  return (
    <div className={styles.item} data-transaction-id="4">
      <div className={styles.description}>Car Payment</div>
      <div className="right">
        <div className={styles.value}>- $299.99</div>
        {type === "expense" && <div className={styles.percentage}>52%</div>}
        <div className={styles.delete}>
          <button className={styles["delete--btn"]}>
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
      <div className={styles.date}>Apr. 21st, 2020</div>
    </div>
  );
};

export default Transaction;
