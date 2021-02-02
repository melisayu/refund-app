import React from 'react';

import './detail.styles.scss';

function Detail(props) {
  const { selected } = props;

  const beforeTax = selected && ((selected.amount * 100) / (100 + selected.vat[0].rate)).toFixed(2);

  return (
    selected ? (
      <div className="detail-wrapper">
        <div className="info">
          <div>
            <h4>Sender</h4>
            <p className="text-blue">{selected.sender}</p>
            <h4>Invoice Number</h4>
            <p className="text-blue">{selected.invoice_no}</p>
            <h4>Description</h4>
            <p className="text-blue">{selected.description}</p>
          </div>
         {
           selected.status && (
            <div>
              <h4>Status</h4>
              <span className="status">{selected.status}</span>
              <h4>Percentage</h4>
              <span>{parseInt(selected.refund_amount)}%</span>
              <h4>Refund (Incl. tax)</h4>
              <span>&euro;{(selected.amount * (selected.refund_amount / 100)).toFixed(2)}</span>
            </div>
           )
         }
        </div>
        <div className="info2">
          <h4>Amount</h4>
          <div className="amount">
            <div>
              <p>Amount excluding tax</p>
              <p>VAT rate</p>
              <p>VAT amount</p>
              <p>Amount including tax</p>
            </div>
            <div>
              <p>{beforeTax}</p>
              <p>{selected.vat[0].rate}</p>
              <p>{selected.vat[0].amount}</p>
              <p className="text-blue bold">{selected.amount}</p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <p>No detail yet</p>
    )
  )
}

export default Detail;
