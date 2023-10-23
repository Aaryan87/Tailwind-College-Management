import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStaff, removeStaff, updateStaff } from './staffSlice';
import { Link } from 'react-router-dom';


function StaffForm() {
  const dispatch = useDispatch();
  const staff = useSelector(state => state.staff);

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('');

  function handleAdd() {
    const newStaff = {
      id,
      name,
      contact,
      address,
      status
    };
    dispatch(addStaff(newStaff));
  }

  function handleRemove(id) {
    dispatch(removeStaff(id));
  }

  function handleUpdate(updatedStaff) {
    dispatch(updateStaff(updatedStaff));
  }

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} placeholder="ID" />
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={contact} onChange={e => setContact(e.target.value)} placeholder="Contact" />
      <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="">Select status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button onClick={handleAdd}>Add</button>

      
      <Link to="/filter-staff">
      <button>Filter Here</button>
      </Link>
      

      {(staff).map(member => (
        <div key={member.id}>
          <button onClick={() => handleRemove(member.id)}>Remove</button>
          <button onClick={() => handleUpdate(member)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default StaffForm;
