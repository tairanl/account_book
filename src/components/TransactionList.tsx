import React, { useContext } from "react";
import { TransactionContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
  // 5.1 get data
  const { transactions } = useContext(TransactionContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {/* 5.2 pass the data to the inner component  */}
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}
