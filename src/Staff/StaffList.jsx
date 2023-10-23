import { useSelector } from 'react-redux';

function StaffList() {
  const staff = useSelector(state => state.staff);

  return (
    <div>
      {staff.map(member => (
        <div key={member.id}>
          <p>ID: {member.id}</p>
          <p>Name: {member.name}</p>
          <p>Contact: {member.contact}</p>
          <p>Address: {member.address}</p>
          <p>Status: {member.status}</p>
        </div>
      ))}
    </div>
  );
}

export default StaffList;
