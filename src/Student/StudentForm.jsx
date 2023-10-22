import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from './studentSlice';

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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </label>
      <label>
        Contact:
        <input
          type="text"
          value={contact}
          onChange={e => setContact(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
