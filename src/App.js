import "./App.css";
import BudgetHeader from "./components/BudgetHeader";
import AddForm from "./components/AddForm";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <>
      <div className="top">
        <BudgetHeader />
      </div>

      <div className="bottom">
        <AddForm />

        <div className="container">
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </>
  );
}

export default App;
