import styles from "./AddTransactionForm.module.css";

const AddTransactionForm = () => {
  return (
    <div className={styles.add}>
      <div className={styles.container}>
        <input
          type="text"
          className={styles.description}
          placeholder="Add description"
        />
        <input type="number" className={styles.value} placeholder="Value" />
        <button className={styles.btn}>
          <i className="ion-ios-checkmark-outline"></i>
        </button>
      </div>
    </div>
  );
};

export default AddTransactionForm;
