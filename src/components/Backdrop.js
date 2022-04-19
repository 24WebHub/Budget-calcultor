import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from '../wrapper/Backdrop';


const Backdrop = props => {
  return ReactDOM.createPortal(
    <Wrapper>
    <div className="backdrop" onClick={props.onClick}></div></Wrapper>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
