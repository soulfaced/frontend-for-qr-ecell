// frontend/src/components/AddUserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [inevent, setInevent] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the user data to the backend API for user creation
      const response = await axios.post('/api/users', { name, inevent });
      console.log('User created:', response.data);

      // Display success message and reset the form
      setMessage('User added successfully!');
      setName('');
      setInevent(true);

      // Hide the success message after a few seconds (optional)
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error adding user:', error.response.data);
      // Handle errors here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        In Event:
        <input type="checkbox" checked={inevent} onChange={(e) => setInevent(e.target.checked)} />
      </label>
      <button type="submit">Add User</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default AddUserForm;
