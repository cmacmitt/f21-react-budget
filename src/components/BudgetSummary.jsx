const BudgetSummary = ({ type }) => {
  // temporary hack until we fix the styles
  if (type === "incomes") type = "income";

  return (
    <div className={`budget__${type}`}>
      <div className={`budget__${type}--text`}>{type.toUpperCase()}</div>
      <div className="right">
        <div className={`budget__${type}--value`}>- $354.99</div>
        <div className={`budget__${type}--percentage`}>61%</div>
      </div>
    </div>
  );
};

export default BudgetSummary;
