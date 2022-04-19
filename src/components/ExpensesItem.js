import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

import Wrapper from '../wrapper/ExpensesItem'

const ExpensesItem = ({expense, deleteItem}) => {
  const amount = Number(expense.amount).toFixed(2)
  return (
    <Wrapper>      
    <li className="expense__item">
      <div className='expense__item-name-amount'>
        <p className='expense__item-name'>{expense.name}:</p>
        <p className='expense__item-amount'>${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>
      <div className='Item__btn-edit-trash'>
        <button type='button' className='Item__btn-trash' onClick={() => deleteItem(expense.id)}><FaTrashAlt/><span className='delete-text'>Delete</span></button>
      </div>
    </li>
    </Wrapper>
  )
}

export default ExpensesItem