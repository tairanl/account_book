import { TransactionContext } from "../context/GlobalState";
import { useContext } from "react";

//  6. props.transaction => {transaction}
export default function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";
  // console.log(transaction);

  const { deleteTransaction } = useContext(TransactionContext);
  return (
    <li>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
      {sign} {transaction.text}{" "}
      <span className={transaction.amount < 0 ? "minus" : "plus"}>
        $ {Math.abs(transaction.amount)}
      </span>
    </li>
  );
}
