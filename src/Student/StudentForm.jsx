import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from './studentSlice';
import { Link } from 'react-router-dom';

function StudentForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !address || !contact) {
      alert('Please fill in all fields');
      return;
    }

    dispatch(addStudent({ id: Date.now(), name, address, contact }));
    setName('');
    setAddress('');
    setContact('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 rounded-md bg-gray-800  shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="name" className="text-lg font-semibold  text-white">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-2 mt-1 border rounded-lg  bg-gray-600"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="text-lg font-semibold text-white">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            className="w-full p-2 mt-1 border rounded-lg  bg-gray-600"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="text-lg font-semibold text-white">Contact:</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={e => setContact(e.target.value)}
            className="w-full p-2 mt-1 border rounded-lg bg-gray-600"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
