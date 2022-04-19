import styled from 'styled-components'

const Wrapper = styled.section`
.expense-form__modal {
  position: fixed;
  width: 30vw;
  top: 2%;
  left: 35%;
  padding: 4rem;
  background-color: var( --color-tertiary);
  z-index: 20;
}


.close__add-expense-form--btn {
 position: absolute;
 color: #e74c3c;
 top: 1rem;
 right: 1rem;
 background-color: transparent;
 border: none;
 font-weight: 700;
}

.close__add-expense-form--btn:hover {
  cursor: pointer;
}

.add-expense-form__title {
  font-size: calc(1rem + 1vw);
  padding: 0 0 2.5rem;
  font-weight: 500;
  color: var(--color-secondary);
}

.add-expense-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  input,
  button {
    padding: 0.5rem 0;
    border: none;
  }

  input {
    margin-bottom: 3rem;
    border-bottom: var(--color-secondary) solid 0.1rem;
  }

  input:focus {
    outline: var(--color-secondary) solid 0.1rem;
  }

  .error-message {
  color: var(--color-quinary);
}

  button {
    background-color: var(--color-secondary);
    color: var(--color-tertiary);
    font-weight: 500;
    padding: 0.6rem;
  }

  button:hover {
    cursor: pointer;
  }
}

/*-*-*-*-*-*-*-*-*-*-*-*-* (max-width:600px) Mark *-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
@media screen and (max-width: 600px) {
  .expense-form__modal {
    width: 40vw;
    left: 30%;
  }

  input {
    font-size: calc(1rem + 0.6vw);
  }
}

/*-*-*-*-*-*-*-*-*-*-*-*-* (max-width:450px) Mark *-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
@media screen and (max-width: 450px) {
  .expense-form__modal {
    width: 50vw;
    left: 25%;
  }
}
/*-*-*-*-*-*-*-*-*-*-*-*-* (max-width:350px) Mark *-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
@media screen and (max-width: 350px) {
  .expense-form__modal {
    width: 60vw;
    left: 20%;
  }
}
`

export default Wrapper