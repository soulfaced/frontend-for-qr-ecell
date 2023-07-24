// frontend/src/components/VerifyPage.js
import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode'; // Use named import

const VerifyPage = () => {
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    const qrScanner = new Html5QrcodeScanner('qr-scanner', {
      fps: 10,
      qrbox: 250,
    });

    qrScanner.render(onScanSuccess);

    return () => {
      qrScanner.clear();
    };
  }, []);

  const onScanSuccess = (scannedText) => {
    setScannedData(scannedText);
  };

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <div id="qr-scanner"></div>
      {scannedData && <p>Scanned Data: {scannedData}</p>}
    </div>
  );
};

export default VerifyPage;
