import React from 'react';

import './header.styles.scss';
import Logo from '../../assets/refund-icon.png';

function Header() {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <img className="logo" src={Logo} alt="Refund Logo" />
        <p>Refund</p>
      </div>
    </div>
  )
}

export default Header;
