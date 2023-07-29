import { useContext, useState } from "react";
import { TransactionContext } from "../context/GlobalState";

// 6.
export default function AddTransaction() {
  // useContext
  const { addTransaction } = useContext(TransactionContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(text, amount);
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <div className="addTransaction-container">
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            value={text}
            placeholder="Transaction name..."
            onChange={(event) => setText(event.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Amount</label>
          <input
            type="text "
            value={amount}
            placeholder="Enter amount"
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <button className="add-btn">Add transaction</button>
      </form>
    </div>
  );
}
