// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import Routes

import UploadCSVForm from './components/UploadCSVForm';
import AddUserForm from './components/addUserForm';
import QRCodeGenerator from './components/QRCodeGenerator';
import VerifyPage from './components/verifyPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Add User</Link>
            </li>
            <li>
              <Link to="/upload-csv">Upload CSV</Link>
            </li>
            <li>
              <Link to="/qr-code-generator">QR Code Generator</Link>
            </li>
            <li>
              <Link to="/verify">Verify</Link>
            </li>
          </ul>
        </nav>
        <Routes> {/* Wrap Routes around Route components */}
          <Route path="/" element={<AddUserForm />} />
          <Route path="/upload-csv" element={<UploadCSVForm />} />
          <Route path="/qr-code-generator" element={<QRCodeGenerator />} />
          <Route path="/verify" element={<VerifyPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
