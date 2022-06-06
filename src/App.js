import "./App.css";
import BudgetHeader from "./components/BudgetHeader";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <>
      <BudgetHeader />

      <div className="bottom">
        <AddTransactionForm />

        <div className="container">
          <TransactionList type="income" />
          <TransactionList type="expense" />
        </div>
      </div>
    </>
  );
}

export default App;
