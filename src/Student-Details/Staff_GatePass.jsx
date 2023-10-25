import React, { useEffect, useState } from 'react';

function DisplayGatePassData() {
  const [formData, setFormData] = useState({});
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('gatePassData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
    }
  }, []);

  const handleRemove = () => {
    // Remove data from local storage
    localStorage.removeItem('gatePassData');
    setIsRemoved(true);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-md p-8 w-1/2">
        <h2 className="text-3xl font-bold text-center mb-6">Gate Pass Data</h2>
        {isRemoved ? (
          <p className="text-green-500 font-semibold mb-4">Data Removed</p>
        ) : (
          <div>
            <div className="mb-4">
              <p className="font-semibold">Student Name:</p>
              <p>{formData.studentName}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Parent Name:</p>
              <p>{formData.parentName}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Parent's Contact Number:</p>
              <p>{formData.parentContact}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Enrollment Option:</p>
              <p>{formData.enrollmentOption}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">From Time:</p>
              <p>{formData.fromTime}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">To Time:</p>
              <p>{formData.toTime}</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Reason:</p>
              <p>{formData.reason}</p>
            </div>
            <button
              onClick={handleRemove}
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-red-300"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayGatePassData;
