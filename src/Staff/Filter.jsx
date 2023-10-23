import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeStaff, updateStaff } from './staffSlice';

const Filter = () => {

  
  const dispatch = useDispatch();
  const staff = useSelector(state => state.staff);

  const [filter, setFilter] = useState('');

    function handleFilter(staff) {
        return staff.filter(member => 
          member.id.includes(filter) ||
          member.name.includes(filter) ||
          member.contact.includes(filter) ||
          member.address.includes(filter) ||
          member.status.includes(filter)
        );
    }

    function handleRemove(id) {
        dispatch(removeStaff(id));
      }
    
      function handleUpdate(updatedStaff) {
        dispatch(updateStaff(updatedStaff));
      }


  return (
    <div>
      <input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filter" />

      {handleFilter(staff).map(member => (
        <div key={member.id}>
          <p>ID: {member.id}</p>
          <p>Name: {member.name}</p>
          <p>Contact: {member.contact}</p>
          <p>Address: {member.address}</p>
          <p>Status: {member.status}</p>
          <button onClick={() => handleRemove(member.id)}>Remove</button>
          <button onClick={() => handleUpdate(member)}>Update</button>
        </div>
      ))}

    </div>
  )
}

export default Filter;
