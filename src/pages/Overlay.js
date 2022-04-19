import React from 'react'
import ReactDOM from 'react-dom'

const Overlay = props => {
  return ReactDOM.createPortal(
    <div className="overlay">
    {props.children}
  </div>, document.getElementById('overlay-hook'))

  
}

export default Overlay