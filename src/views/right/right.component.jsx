import React from 'react';

import Button from '../../components/button/button.component';
import Detail from '../../components/detail/detail.component';
import Form from '../../components/form/form.component';
import Footer from '../../components/footer/footer.component';

import './right.styles.scss';

function Right(props) {
  const {
    selected, setSelected, handleFormCallback,
    requestRefund, setRequestRefund,
  } = props;

  const closeRefund = () => {
    setSelected(null);
  }

  const refund = () => {
    setRequestRefund(true);
  }

  // if status is REQUESTED, don't ask user to make a refund again
  const renderDetail = (
    <div className="refund">
        {selected && !selected.refund_amount && (
          <>
            <p className="title">Do you wish to refund this transaction?</p>
            <div className="buttons-wrapper">
              <Button onClickFunc={refund}>Yes</Button>
              <Button onClickFunc={closeRefund}>No</Button>
            </div>
          </>
        )}
        <Detail selected={selected} />
    </div>
  )

  const renderForm = (
    <div className="refund">
      <Form setRequestRefund={setRequestRefund} handleFormCallback={handleFormCallback} />
    </div>
  )

  return (
    <div className="right-wrapper">
      {requestRefund ? renderForm : selected && renderDetail}
      <Footer />
    </div>
  )
}

export default Right;
