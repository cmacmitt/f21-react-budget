import Transaction from "./Transaction";

const TransactionList = ({ type }) => {
  // temporary hack until we fix the styles
  if (type === "incomes") type = "income";
  return (
    <div className={type}>
      <h2 className={`${type}__title`}>{type.toUpperCase()}</h2>
      <div className={`${type}__list`}>
        <Transaction type={type} />
        <Transaction type={type} />
        <Transaction type={type} />
      </div>
    </div>
  );
};

export default TransactionList;
