import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css"

const ExpenseItem = ( props ) => {
  const { amount, date } = props;
  const [title, setTitle] = useState( props.title )

  const clickHandler = () => {
    setTitle('new ' + title )
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={ date } />
      <div className="expense-item__description">
        <h2>{ title }</h2>
        <div className="expense-item__price">${ amount }</div>
      </div>
      <button onClick={ clickHandler }>Change Title</button>
    </Card>
  )
}

export default ExpenseItem;

