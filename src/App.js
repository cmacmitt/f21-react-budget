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

  const incomeTotal = incomes.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  const expenses = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const handleAddTransaction = (amount, description) => {
    const type = +amount > 0 ? "income" : "expense";

    setTransactions((prevState) => {
      return [
        ...prevState,
        {
          id: generateRandomId(),
          type: type,
          amount: Math.abs(+amount),
          description: description,
          date: Date.now(),
        },
      ];
    });
  };

  return (
    <>
      <BudgetHeader incomes={incomes} expenses={expenses} />

      <div className="bottom">
        <AddTransactionForm addTransaction={handleAddTransaction} />

        <div className="container">
          <TransactionList type="income" transactions={incomes} />
          <TransactionList
            type="expense"
            transactions={expenses}
            totalIncome={incomeTotal}
          />
        </div>
      </div>
    </>
  );
}

export default App;
