import React from 'react';

import './button.styles.scss';

function Button(props) {
  const { onClickFunc, children, disabled } = props;

  return (
    <button
      type="button"
      className="primary-button"
      onClick={() => onClickFunc()}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;
