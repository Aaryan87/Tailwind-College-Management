import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent, updateStudent } from './studentSlice';

function StudentList() {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleEdit = student => {
    setEditId(student.id);
    setName(student.name);
    setAddress(student.address);
    setContact(student.contact);
  };

  const handleUpdate = e => {
    e.preventDefault();
    dispatch(updateStudent({ id: editId, name, address, contact }));
    setEditId(null);
    setName('');
    setAddress('');
    setContact('');
  };

  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>
          {student.name} - {student.address} - {student.contact}
          <button onClick={() => dispatch(deleteStudent(student.id))}>Delete</button>
          <button onClick={() => handleEdit(student)}>Edit</button>
        </li>
      ))}
      {editId && (
        <form onSubmit={handleUpdate}>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
          <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" />
          <input value={contact} onChange={e => setContact(e.target.value)} placeholder="Contact" />
          <button type="submit">Update Student</button>
        </form>
      )}
    </ul>
  );
}

export default StudentList;
