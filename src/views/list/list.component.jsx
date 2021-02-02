import React from 'react';

import Button from '../../components/button/button.component';
import Card from '../../components/card/card.component';

import './list.styles.scss';

function List(props) {
  const {
    onClickFunc, setSelected, listItems,
  } = props;

  // Render registered invoice data
  const listItemsRender = listItems.map((item, index) => {
    return (
      <Card
        key={index}
        item={item}
        index={index}
        setSelected={setSelected}
        listItems={listItems}
      />
    )
  });

  return (
    <div className="list-wrapper">
      <div className="add-button">
        <Button onClickFunc={() => onClickFunc('reg-qr')}>{`+ Register an Invoice`}</Button>
      </div>
      <h2>All Invoices</h2>
      {listItems.length !== 0
        ? listItemsRender
        : <p>Your list is still empty at the moment</p>
      }
    </div>
  )
}

export default List;
