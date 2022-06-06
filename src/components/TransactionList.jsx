import styles from "./TransactionList.module.css";
import Transaction from "./Transaction";

const TransactionList = ({ type, transactions }) => {
  // temporary hack until we fix the styles
  if (type === "incomes") type = "income";
  return (
    <div className={styles[type]}>
      <h2 className={`${styles[type]}__title`}>{type.toUpperCase()}</h2>
      <div className={`${styles[type]}__list`}>
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            type={transaction.type}
            details={transaction}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
