import styles from "./BudgetHeader.module.css";
import BudgetSummary from "./BudgetSummary";

const BudgetHeader = ({ incomes, expenses }) => {
  const incomeTotal = incomes.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  const expenseTotal = expenses.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  const displayDate = new Date().toLocaleDateString("en-CA", {
    month: "long",

    year: "numeric",
  });

  const netIncome = incomeTotal - expenseTotal;
  const expensePercentage = ((expenseTotal / incomeTotal) * 100).toFixed();
  return (
    <div className={styles.top}>
      <div className={styles.container}>
        <div className={styles.title}>
          Available Budget in
          <span className={styles.month}> {displayDate}</span>:
        </div>

        <div className={styles.value}>
          {netIncome >= 0 ? "+" : "-"} ${netIncome.toFixed(2)}
        </div>

        <BudgetSummary type="incomes" total={incomeTotal} />
        <BudgetSummary
          type="expenses"
          total={expenseTotal}
          percentage={expensePercentage}
        />
      </div>
    </div>
  );
};

export default BudgetHeader;
