import { useState } from 'react';
import { Link } from 'react-router-dom';

const Student_Marks = () => {
  const [courseCode, setCourseCode] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!courseCode || !subject || !marks) {
      alert('Please fill in all fields.');
      return;
    }

    const newData = {
      courseCode,
      subject,
      marks: parseFloat(marks),
    };

    const existingData = JSON.parse(localStorage.getItem('marksData')) || [];

    existingData.push(newData);

    localStorage.setItem('marksData', JSON.stringify(existingData));
    setCourseCode('');
    setSubject('');
    setMarks('');
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col items-center justify-center">
      <div className="bg-black bg-opacity-30 p-4 rounded border border-gray-800 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add Marks</h2>
        <form onSubmit={handleFormSubmit}>
          {isSuccess && (
            <p className="text-green-400 text-center mb-4">Successfully added!</p>
          )}
          <div className="mb-4">
            <label htmlFor="courseCode" className="block text-sm font-semibold text-white">
              Course Code
            </label>
            <input
              type="text"
              id="courseCode"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-semibold text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="marks" className="block text-sm font-semibold text-white">
              Marks
            </label>
            <input
              type="number"
              id="marks"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              Add Marks
            </button>
            <Link to="/staff-dashboard/remove-marks-staff">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              Show
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Student_Marks;
