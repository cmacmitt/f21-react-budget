import styles from "./BudgetSummary.module.css";

const BudgetSummary = ({ type, total, percentage }) => {
  // temporary hack until we fix the styles
  if (type === "incomes") type = "income";

  return (
    <div className={styles[type]}>
      <div className={styles.text}>{type.toUpperCase()}</div>
      <div className="right">
        <div className={styles.value}>
          {type === "expenses" ? "-" : "+"} ${total}
        </div>

        <div
          className={`${styles.percentage} ${
            type === "expenses" && styles["expenses--percentage"]
          }`}
        >
          {percentage ? `${percentage}%` : ""}
        </div>
      </div>
    </div>
  );
};

export default BudgetSummary;
