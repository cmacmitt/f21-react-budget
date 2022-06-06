import BudgetSummary from "./BudgetSummary";

const BudgetHeader = () => {
  return (
    <div className="budget">
      <div className="budget__title">
        Available Budget in
        <span className="budget__title--month">April 2020</span>:
      </div>

      <div className="budget__value">+ $225.10</div>

      <BudgetSummary type="incomes" />
      <BudgetSummary type="expenses" />
    </div>
  );
};

export default BudgetHeader;
