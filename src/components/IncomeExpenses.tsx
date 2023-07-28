import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../context/GlobalState";

// 5. income and expenses calculations
export default function IncomeExpenses() {
  // 5.1 useContext, get data with useContext hook
  const { transactions } = useContext(TransactionContext);
  // 5.2 set states
  const [money, setMoney] = useState({
    income: 0,
    expense: 0,
  });
  // 5.3 useEffect hook, update states
  useEffect(() => {
    const amounts = transactions.map((transactions) => transactions.amount);
    const income = amounts
      .filter((transaction) => transaction > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    const expense = (
      amounts
        .filter((transaction) => transaction < 0)
        .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    setMoney({
      income,
      expense,
    });
  }, [transactions]);

  return (
    <div className="inc-exp-container">
      <div className="income">
        <h4>Income</h4>
        <p className="money plus">${money.income} </p>
      </div>
      <div className="expenses">
        <h4>Expenses</h4>
        <p className="money minus">${money.expense}</p>
      </div>
    </div>
  );
}
