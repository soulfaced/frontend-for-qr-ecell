// frontend/src/components/UploadCSVForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadCSVForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare the data for file upload
      const formData = new FormData();
      formData.append('csvFile', file);

      // Send the CSV file to the backend API for processing
      const response = await axios.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('CSV file uploaded:', response.data);
      // You can add a success message or handle the response here
    } catch (error) {
      console.error('Error uploading CSV file:', error.response.data);
      // Handle errors here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload CSV</button>
    </form>
  );
};

export default UploadCSVForm;
