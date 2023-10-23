import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStaff, updateStaff } from './staffSlice';

function StaffList() {
  const dispatch = useDispatch();
  const staff = useSelector(state => state.staff);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleEdit = staffMember => {
    setEditId(staffMember.id);
    setName(staffMember.name);
    setAddress(staffMember.address);
    setContact(staffMember.contact);
  };

  const handleUpdate = e => {
    e.preventDefault();
    dispatch(updateStaff({ id: editId, name, address, contact }));
    setEditId(null);
    setName('');
    setAddress('');
    setContact('');
  };

  return (
    <ul>
      {staff.map(staffMember => (
        <li key={staffMember.id}>
          {staffMember.name} - {staffMember.address} - {staffMember.contact}
          <button onClick={() => dispatch(deleteStaff(staffMember.id))}>Delete</button>
          <button onClick={() => handleEdit(staffMember)}>Edit</button>
        </li>
      ))}
      {editId && (
        <form onSubmit={handleUpdate}>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
          <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" />
          <input value={contact} onChange={e => setContact(e.target.value)} placeholder="Contact" />
          <button type="submit">Update Staff</button>
        </form>
      )}
    </ul>
  );
}

export default StaffList;
