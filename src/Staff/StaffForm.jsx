import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStaff } from './staffSlice';

function StaffForm() {
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

    dispatch(addStaff({ id: Date.now(), name, address, contact }));
    setName('');
    setAddress('');
    setContact('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 rounded-md bg-gray-800 shadow-lg ">
      <label className="block text-lg font-semibold mb-4 text-white">
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-2 mt-1 border rounded-lg bg-gray-600 text-white"
        />
      </label>
      <label className="block text-lg font-semibold mb-4 text-white">
        Address:
        <input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
          className="w-full p-2 mt-1 border rounded-lg bg-gray-600 text-white"
        />
      </label>
      <label className="block text-lg font-semibold mb-4 text-white">
        Contact:
        <input
          type="text"
          value={contact}
          onChange={e => setContact(e.target.value)}
          className="w-full p-2 mt-1 border rounded-lg bg-gray-600 text-white"
        />
      </label>
      <div className="flex justify-center items-center ">
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </div>
    </form>
  );
}

export default StaffForm;
