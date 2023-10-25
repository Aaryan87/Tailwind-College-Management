import { useState } from 'react';
import { useSelector } from 'react-redux';

function FilterStudent() {
  const students = useSelector(state => state.students);
  const [filter, setFilter] = useState('');

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter by name"
      />

      {filteredStudents.map(student => (
        <div key={student.id}>
        {student.name} - {student.address} - {student.contact}
        </div>
      ))}
    </div>
  );
}

export default FilterStudent;
