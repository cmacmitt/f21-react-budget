import { useState } from "react";
import styles from "./AddTransactionForm.module.css";

const AddTransactionForm = ({ addTransaction }) => {
  const [descriptionValue, setDescriptionValue] = useState("");
  const [amountValue, setAmountValue] = useState("");

  const handleClick = (event) => {
    if (amountValue === "" || descriptionValue === "") return;
    addTransaction(amountValue, descriptionValue);
    setAmountValue("");
    setDescriptionValue("");
  };

  return (
    <div className={styles.add}>
      <div className={styles.container}>
        <input
          onChange={(event) => setDescriptionValue(event.target.value)}
          type="text"
          className={styles.description}
          placeholder="Add description"
          value={descriptionValue}
        />
        <input
          onChange={(event) => setAmountValue(event.target.value)}
          type="number"
          className={styles.value}
          placeholder="Value"
          value={amountValue}
        />
        <button onClick={handleClick} className={styles.btn}>
          <i className="ion-ios-checkmark-outline"></i>
        </button>
      </div>
    </div>
  );
};

export default AddTransactionForm;
