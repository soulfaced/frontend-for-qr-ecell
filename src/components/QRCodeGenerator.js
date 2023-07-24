// frontend/src/components/QRCodeGenerator.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        users.map((user) => (
          <div key={user._id}>
            <p>User Name: {user.name}</p>
            {/* Render the QR code with the user ID */}
            <QRCode value={user._id} />
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default QRCodeGenerator;
