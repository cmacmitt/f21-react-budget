import styles from "./BudgetSummary.module.css";

const BudgetSummary = ({ type }) => {
  // temporary hack until we fix the styles
  if (type === "incomes") type = "income";

  return (
    <div className={styles[type]}>
      <div className={styles.text}>{type.toUpperCase()}</div>
      <div className="right">
        <div className={styles.value}>- $354.99</div>
        <div
          className={`${styles.percentage} ${
            type === "expenses" && styles["expenses--percentage"]
          }`}
        >
          61%
        </div>
      </div>
    </div>
  );
};

export default BudgetSummary;
