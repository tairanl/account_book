//  6. props.transaction => {transaction}
export default function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";
  console.log(transaction);
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text} <span>$ {transaction.amount}</span>
    </li>
  );
}
