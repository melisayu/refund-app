import React, { useState, useEffect } from 'react';

import Header from './components/header/header.component';
import Modal from './components/modal/modal.component';
import QRReader from './components/qrreader/qrreader.component';
import Right from './views/right/right.component';
import List from './views/list/list.component';

import './App.styles.scss';

function App() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();
  const [requestRefund, setRequestRefund] = useState(false);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    // When selected changes or when there is new item to be selected, check if there is duplicate
    if (selected) {
      const valueArr = listItems.map((item) => {
        return item.invoice_no;
      });

      const isDuplicate = valueArr.some((item) => { 
        return item == selected.invoice_no;
      });

      if (!isDuplicate) {
        setListItems(oldArray => [...oldArray, selected]);
      } else if (selected.status) {
        // If item has new status, find the index of that item in the list and set new list with updated status
        const index = listItems.findIndex(({ invoice_no }) => invoice_no === selected.invoice_no);
        listItems[index] = selected;
        setListItems(() => [...listItems]);
      }
    }
  }, [selected]);

  // To open qr reader modal
  const onClickFunc = () => {
    setShow(true);
  }

  // To close qr reader modal
  const closeModal = () => {
    setShow(false);
  }

  // Callback for qr reader
  const handleCallback = (data) => {
    setSelected(JSON.parse(data))
    closeModal();
  }

  /// Callback for refund request form after submit
  const handleFormCallback = (data) => {
    setRequestRefund(false); // after submit, request refund form will disappear

    // Updating selected object with information from form
    setSelected(Object.assign({}, selected, {
      refund_amount: data.refund_amount || '',
      refund_description: data.description || '',
      signature: data.signature || '',
      status: data ? 'REQUESTED' : ''
    }));
  }

  return (
    <div className="main">
      <div className="left">
        <Header />
        <List
          onClickFunc={onClickFunc}
          setSelected={setSelected}
          listItems={listItems}
        />
      </div>
      <Right
        selected={selected}
        setSelected={setSelected}
        handleFormCallback={handleFormCallback}
        requestRefund={requestRefund}
        setRequestRefund={setRequestRefund}
      />
      <Modal show={show} onClose={closeModal} title={`Scan a QR`}>
        <QRReader handleCallback={handleCallback} />
      </Modal>
    </div>
  )
}

export default App;
