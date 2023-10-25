import { useEffect, useState } from 'react';

function DisplayGatePassData() {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem('gatePassData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
    }
  }, []);

  return (
    <div>
      <h2>Gate Pass Data</h2>
      <p>Student Name: {formData.studentName}</p>
      <p>Parent Name: {formData.parentName}</p>
      <p>Parent's Contact Number: {formData.parentContact}</p>
      {/* Display other form fields as needed */}
    </div>
  );
}

export default DisplayGatePassData;
