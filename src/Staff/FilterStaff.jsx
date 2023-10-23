import { useState } from 'react';
import { useSelector } from 'react-redux';

function FilterStaff() {
  const staff = useSelector(state => state.staff);
  const [filter, setFilter] = useState('');

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const filteredStaff = staff.filter(staffMember =>
    staffMember.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter by name"
      />

      {filteredStaff.map(staffMember => (
        <div key={staffMember.id}>
          {staffMember.name} - {staffMember.address} - {staffMember.contact}
          {/* display staff details */}
        </div>
      ))}
    </div>
  );
}

export default FilterStaff;
