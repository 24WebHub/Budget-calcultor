import styled from 'styled-components'

const Wrapper = styled.section`
.expense__item {
 max-width: 100%;
 display: flex;
 justify-content: space-between;
 padding: 0.5rem;
 margin-bottom: 3rem;
 background-color: var(--color-secondary-m);
 color: var(--color-tertiary);
 /* border: var(--color-tertiary) solid 0.1rem; */
 border-radius: 2px;
 box-shadow: 2px 2px 4px var(--color-primary);
}

.expense__item-name-amount {
  display: flex;
  justify-content: flex-start;
}

.expense__item-name {
  margin-right: 1.5rem;
}

.expense__item-amount {
}
 
.Item__btn-trash {
 background-color: inherit;
 font-size: calc(1rem + 0.6vw);
 border: none;
 color: var(--color-tertiary);
}

.Item__btn-trash:hover {
  cursor: pointer;
  color: #e74c3c;
  text-decoration: underline;
}

.delete-text {
  margin-left: 1rem;
}
`
export default Wrapper;