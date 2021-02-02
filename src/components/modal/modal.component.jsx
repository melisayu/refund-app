import React from 'react';

import Button from '../../components/button/button.component';

import './modal.styles.scss';

function Modal(props) {
  const { show, title, children, onClose } = props;

  if(!show){
    return null;
  }
    
  return (
    <div className="modal">
      <div className="modal-wrapper">
        <h3>{title}</h3>
        <div className="modal-content">{children}</div>
        <Button onClickFunc={onClose}>Close</Button>
      </div>
    </div>
  ); 
}

export default Modal;
