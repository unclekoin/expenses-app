import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items }) => {
  if (!items.length) {
    return  <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      { items.map(({id, title, amount, date}) => (
        <ExpenseItem
          key={id}
          title={title}
          amount={amount}
          date={date}
        />
      )) }
    </ul>
  )
}

export default ExpensesList;
