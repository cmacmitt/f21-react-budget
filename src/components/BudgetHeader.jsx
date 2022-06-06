import styles from "./BudgetHeader.module.css";
import BudgetSummary from "./BudgetSummary";

const BudgetHeader = () => {
  return (
    <div className={styles.top}>
      <div className={styles.container}>
        <div className={styles.title}>
          Available Budget in
          <span className={styles.month}> April 2020</span>:
        </div>

        <div className={styles.value}>+ $225.10</div>

        <BudgetSummary type="incomes" />
        <BudgetSummary type="expenses" />
      </div>
    </div>
  );
};

export default BudgetHeader;
