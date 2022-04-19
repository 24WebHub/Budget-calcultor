import React, {useState, useEffect} from "react";
import ExpensesList from "./components/ExpensesList";
import ExpenseFormModal from "./pages/ExpenseFormModal";

import TotalExpense from "./components/TotalExpense";
import AddExpenseButton from "./components/AddExpenseButton";

import titleImage from './image/icons8-ledger-48.png'


const App = () => {
  const [formIsOpen, setFormIsOpen] = useState(false)
  const [expenses, setExpenses] = useState([]) 
  
  
  const addToExpenses = (newExpense) => {
    setExpenses([newExpense, ...expenses]) // Set it to Array because expenses is an array
  }


  const totalExpenses = expenses.reduce((sum, num) => {
    return (sum += Number(num.amount))
  }, 0);


 const deleteItem = (id) => {
   setExpenses(expenses.filter(expense => expense.id !== id))
 }

  const openExpenseFormHandler = () => {
    setFormIsOpen(!formIsOpen)
  }

  const closeExpenseForm = () => {
    setFormIsOpen(false)
  }

  const clearExpensesHandler = () => {
    setExpenses([])
  }

  useEffect(() => {
    const expenses = JSON.parse(localStorage.getItem('expenses'));
    if (expenses) {
     setExpenses(expenses);
    }
  }, []);

 useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <React.Fragment>
    {formIsOpen && <ExpenseFormModal onClick={closeExpenseForm} formIsOpen={formIsOpen} closeExpenseForm={closeExpenseForm} addToExpenses={addToExpenses} />}
    <div className="app__container">
      <div className="overlay-effect">
      <h1 className="header__tittle">Budget Calculator</h1>
      <TotalExpense total={totalExpenses} />
      <AddExpenseButton openExpenseForm={openExpenseFormHandler} />
      <ExpensesList expenses={expenses} deleteItem={deleteItem} clearExpense={clearExpensesHandler} openExpenseForm={openExpenseFormHandler} />
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
