import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: 'EXP' + Math.random().toString().replace(/\./, '')
    }

    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpanseData={ saveExpenseDataHandler } />
    </div>
  )
}

export default NewExpense;
