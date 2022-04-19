import React from 'react'

const TotalExpense = ({total}) => {

  const expenseSum = total.toFixed(2)
  return (
    <div>  
    <p className="total-expenses">Total:  <span>${expenseSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p></div>
  )
}

export default TotalExpense