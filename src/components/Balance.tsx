import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../context/GlobalState";

//  5 balance calculation
export default function Balance() {
  const { transactions } = useContext(TransactionContext); //access to state

  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const amounts = transactions.map((transaction) => transaction.amount);

    const totalAmounts = amounts
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    // console.log(totalAmounts);
    setBalance(totalAmounts);
  }, [transactions]);

  return (
    <>
      <h4>Balance</h4> <h2>${balance} </h2>
    </>
  );
}
