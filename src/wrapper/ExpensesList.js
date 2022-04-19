import styled from 'styled-components'

const Wrapper = styled.section`
.expenses__list--container {
  margin-top: 4rem;
  }

.expenses__list {
  width: 80%;
  margin: 5rem auto;
}

.expenses__list--title {
  padding-left: 0.5rem 2rem 2rem;
  font-size: calc(1.2rem + 1vw);
  font-weight: 500;
  color: var(--color-quinary);
}

.no-expense-container {
  text-align: center;
  padding-top: 8rem;
  padding-bottom: 8rem;
  /* background-color: var(--color-secondary); */
  color: var(--color-quinary);
}

.no-expense-title {
  font-size: 2rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
}

.no-expense-container img{
  padding: 0;
  margin: 0;
}

.no-expense--btn-text {
  display: flex;
  justify-content: center;
}

.no-expense-text {
  margin-left: 1.5rem;
}

.no-expense-btn {
  background-color: transparent;
  font-size: calc(0.8rem + 0.5vw);
  font-weight: 600;
  color: var(--color-tertiary);
  border: none;
}

.no-expense-btn:hover {
  cursor: pointer;
  color: var(--color-secondary);
}

.clear-expenses-btn {
  display: block;
  width: 90%;
  margin: 0 auto;
  font-size: calc(0.8rem + 0.5vw);
  letter-spacing: 0.1rem;
  font-weight: 600;
  padding: calc(0.4rem + 0.4vw) calc(1.1rem + 0.8vw);
  background-color: var(--color-tertiary);
  color: var(--color-secondary);
  border: none;
  border-radius: 4px;
}

.clear-expenses-btn:hover {
  background-color: var(--color-secondary);
  color: var(--color-tertiary);
  cursor: pointer;
}
`

export default Wrapper