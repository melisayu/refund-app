import React from 'react';
import QrReader from 'react-qr-reader';

import './qrreader.styles.scss';
 
function QRReader(props) {
  const   handleScan = data => {
    if (data) {
      props.handleCallback(data, 'qr-data')
    }
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        className="qr-reader"
      />
    </div>
  )
}

export default QRReader;
