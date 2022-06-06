import { useState } from "react";
import "./App.css";
import BudgetHeader from "./components/BudgetHeader";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionList from "./components/TransactionList";

const generateRandomId = () => Math.floor(Math.random() * 1000);

function App() {
  const initialState = [
    {
      id: generateRandomId(),
      type: "expense",
      amount: 200.0,
      description: "Car Payment",
      date: Date.now(),
    },
    {
      id: generateRandomId(),
      type: "income",
      amount: 1200.0,
      description: "Pay cheque",
      date: Date.now(),
    },
    {
      id: generateRandomId(),
      type: "income",
      amount: 250.0,
      description: "Birthday money",
      date: Date.now(),
    },
    {
      id: generateRandomId(),
      type: "expense",
      amount: 22.32,
      description: "Late night drive thru",
      date: Date.now(),
    },
    {
      id: generateRandomId(),
      type: "expense",
      amount: 91.0,
      description: "Cheese Supply",
      date: Date.now(),
    },
    {
      id: generateRandomId(),
      type: "expense",
      amount: 2.0,
      description: "Gas to get to the cheese store",
      date: Date.now(),
    },
  ];
  const [transactions, setTransactions] = useState(initialState);

  const incomes = transactions.filter(
    (transaction) => transaction.type === "income"
  );
  const expenses = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  return (
    <>
      <BudgetHeader />

      <div className="bottom">
        <AddTransactionForm />

        <div className="container">
          <TransactionList type="income" transactions={incomes} />
          <TransactionList type="expense" transactions={expenses} />
        </div>
      </div>
    </>
  );
}

export default App;
