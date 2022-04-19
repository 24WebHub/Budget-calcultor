import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Alert from '../components/Alert'

import Backdrop from '../components/Backdrop'
import Wrapper from '../wrapper/ExpenseFormModal'
import Overlay from './Overlay'

const ExpenseFormModal = ({onClick, formIsOpen, closeExpenseForm, addToExpenses}) => {
const [name, setName] = useState('')
const [amount, setAmount] = useState(null)
const [showAlert, setShowAlart] = useState(false)

const submitHandler = (e) => {
  e.preventDefault()

  if(!name || !amount) {
  displayAlert();
  return
  }
  const id = uuidv4()
  const newExpense = {name, amount, id}

  addToExpenses(newExpense)
  
  setName('')
  setAmount('')
}

const displayAlert = () => {
  setShowAlart(!showAlert)
  clearAlert()
}

const clearAlert = () => {
  setTimeout(() => {
    setShowAlart(false)
  }, 2000)
}

  return (
    <Overlay>
    {formIsOpen && <Backdrop onClick={closeExpenseForm}/>}
    <Wrapper>
    <div className="expense-form__modal">
    <input type="button" className="close__add-expense-form--btn" value="X Close" onClick={onClick}/> 
    <h3 className="add-expense-form__title">Add Expense</h3>
    <form className="add-expense-form" onSubmit={submitHandler}>
      <input type="text" placeholder="Enter Expense" name="name" value={name} onChange={((e) => setName(e.target.value))}></input>
      <input type="text" placeholder="Enter Amount" name="amount" value={amount} onChange={((e) => setAmount(e.target.value))} ></input>
      {showAlert && <Alert alertText={'Please enter all fields'}/>}
      <button type="submit" >Add Expense</button>
    </form>
    </div>
    </Wrapper>
    </Overlay>
  )
}

export default ExpenseFormModal