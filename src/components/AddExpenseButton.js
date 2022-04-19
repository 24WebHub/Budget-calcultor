import React from 'react'


const AddExpenseButton = ({openExpenseForm}) => {
  return (
      <button type="button" className="add-expense__btn" onClick={openExpenseForm}>+ Add Expense</button>
  )
}

export default AddExpenseButton