import React from 'react';

import './card.styles.scss';

function Card(props) {
  const {
    item, setSelected, index, listItems,
  } = props;

  const onClickFunc = () => {
    setSelected(listItems[index]);
  }

  return (
    <div className="card-wrapper" onClick={() => onClickFunc()}>
      <div className="card-info">
        <span>{item.invoice_no}</span>
      </div>
      <div className="card-info">
        <span>&euro; {item.amount}</span>
      </div>
      <div className="card-info">
       <span>{item.sender}</span>
      </div>
      {item.status && (
        <div className="card-info status">
          <span>{item.status}</span>
        </div>
      )}
    </div>
  )
}

export default Card;
