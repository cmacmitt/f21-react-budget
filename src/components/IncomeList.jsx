import IncomeItem from "./IncomeItem";

const IncomeList = () => {
  return (
    <div className="Income">
      <h2 className="Income__title">Incomes</h2>
      <div className="Income__list">
        <IncomeItem />
        <IncomeItem />
        <IncomeItem />
      </div>
    </div>
  );
};

export default IncomeList;
