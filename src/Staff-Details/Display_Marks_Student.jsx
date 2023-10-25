import { useEffect, useState } from 'react';

const Display_Marks_Student = () => {
  const [marksData, setMarksData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('marksData')) || [];
    setMarksData(storedData);
  }, []);

  const removeRow = (index) => {
    const updatedMarksData = marksData.filter((_, i) => i !== index);
    setMarksData(updatedMarksData);
    localStorage.setItem('marksData', JSON.stringify(updatedMarksData));
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-700 text-white">
      <h2 className="text-2xl font-bold mb-4">Marks Data</h2>
      <table className="bg-gray-800 rounded-lg border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2">Course Code</th>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Marks</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {marksData.map((data, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border border-gray-600">{data.courseCode}</td>
              <td className="px-4 py-2 border border-gray-600">{data.subject}</td>
              <td className="px-4 py-2 border border-gray-600">{data.marks}</td>
              <td className="px-4 py-2 border border-gray-600">
                <button
                  onClick={() => removeRow(index)}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-red-300"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display_Marks_Student;
