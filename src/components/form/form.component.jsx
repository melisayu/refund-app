import React, { useState, useEffect } from 'react';

import Button from '../button/button.component';

import './form.styles.scss';

function Form(props) {
  const { handleFormCallback } = props;

  const [form, setState] = useState({
    refund_amount: '',
    refund_description: '',
    signature: '',
  });
  const [validator, setValidator] = useState();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (form.refund_amount) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form])

  const onChange = (e, type) => {
    const { value } = e.target;
    if (type === 'number') {
      // For checking a valid percentage value
      const parsed = parseInt(value);
      if (isNaN(parsed) || parsed < 0 || 100 < parsed) {
        setValidator('Please input a valid number');
        setState({
          ...form,
          refund_amount: '',
        });
      } else {
        setValidator('');
        setState({
          ...form,
          refund_amount: value,
        });
      }
    } else {
      setState({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  }

  const submit = () => {
    handleFormCallback(form);
  }

  return (
    <div className="form-wrapper">
      <h3>Refund Invoice</h3>
      <form type="post">
        <div className="form-group column">
          <input
            type="text"
            onChange={(e) => onChange(e, 'number')}
            id="refundAmount"
            placeholder="Percentage (%)"
            maxLength="5"
          />
          <span className="validator">{validator}</span>
        </div>
        <div className="form-group column">
          <label htmlFor="refund_description">Description/Reason for Refund</label>
          <textarea
            rows="4"
            name="refund_description"
            onChange={(e) => onChange(e)}
            placeholder="Description/reason for refund..."
          >
          </textarea>
        </div>
        <div className="form-group column">
          <label htmlFor="signature">Name/Signature</label>
          <input
            type="text"
            onChange={(e) => onChange(e)}
            name="signature"
            placeholder="Name/signature"
          />
        </div>
        <div className="form-group column">
          <Button onClickFunc={submit} disabled={disabled}>Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default Form;
