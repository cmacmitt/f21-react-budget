import styles from "./TransactionList.module.css";
import Transaction from "./Transaction";

const TransactionList = ({ type }) => {
  // temporary hack until we fix the styles
  if (type === "incomes") type = "income";
  return (
    <div className={styles[type]}>
      <h2 className={`${styles[type]}__title`}>{type.toUpperCase()}</h2>
      <div className={`${styles[type]}__list`}>
        <Transaction type={type} />
        <Transaction type={type} />
        <Transaction type={type} />
      </div>
    </div>
  );
};

export default TransactionList;
