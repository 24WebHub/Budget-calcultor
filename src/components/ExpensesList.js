import React from 'react'
import Wrapper from '../wrapper/ExpensesList'

import emptyImage from '../image/icons8-ledger-96.png'
import ExpensesItem from './ExpensesItem'

const ExpensesList = ({expenses, clearExpense, deleteItem, openExpenseForm}) => {
  return (
    <Wrapper>
    <div className="expenses__list--container">
    <h2 className="expenses__list--title">Expenses</h2>
    <hr></hr>
    {expenses.length === 0 
    ? (<div className='no-expense-container'>
    <img src={emptyImage} alt='Empty List' />
    <h2 className='no-expense-title'>Expenses list is empty!</h2>
    <div className='no-expense--btn-text'>
    <button type="button" className="no-expense-btn" onClick={openExpenseForm}> ...Click</button> 
    <p className='no-expense-text'>to add expense item</p>
    </div>
    </div> )
    : (<ul className="expenses__list">
      {expenses.map(expense => <ExpensesItem deleteItem={deleteItem} key ={expense.id} expense={expense} />
      )}
      <button type='button' className='clear-expenses-btn' onClick={clearExpense}>Clear Expenses</button>
    </ul>)}
    </div>
    </Wrapper>
  )
}

export default ExpensesList