import { useEffect, useState } from 'react';

const Marks_Display = () => {
  const [marksData, setMarksData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('marksData')) || [];
    setMarksData(storedData);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-700 text-white">
      <h2 className="text-2xl font-bold mb-4">Marks Data</h2>
      <table className="bg-gray-800 rounded-lg border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2">Course Code</th>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Marks</th>
          </tr>
        </thead>
        <tbody>
          {marksData.map((data, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border border-gray-600">{data.courseCode}</td>
              <td className="px-4 py-2 border border-gray-600">{data.subject}</td>
              <td className="px-4 py-2 border border-gray-600">{data.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Marks_Display;
