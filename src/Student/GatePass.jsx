import { useState } from 'react';

function Gate_Pass() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    parentContact: '',
    enrollmentOption: 'fullDay',
    fromTime: '',
    toTime: '',
    reason: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (formData.studentName.trim() === '') {
      errors.studentName = 'Student name is required.';
    }
    if (formData.parentName.trim() === '') {
      errors.parentName = 'Parent name is required.';
    }
    if (formData.parentContact.trim() === '') {
      errors.parentContact = "Parent's contact number is required.";
    }
    if (formData.fromTime.trim() === '' || formData.toTime.trim() === '') {
      errors.time = 'Both from and to times are required.';
    }
    if (formData.reason.trim() === '') {
      errors.reason = 'Reason is required.';
    }

    if (Object.keys(errors).length === 0) {
      setIsFormSubmitted(true);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Gate Pass</h2>
        {isFormSubmitted && (
          <p className="bg-green-500 p-3 rounded-md text-center mb-4">
            Gate Pass applied!
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="studentName" className="block text-sm font-semibold mb-2">
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            {formErrors.studentName && (
              <p className="text-red-600 text-sm">{formErrors.studentName}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="parentName" className="block text-sm font-semibold mb-2">
              Parent Name
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            {formErrors.parentName && (
              <p className="text-red-600 text-sm">{formErrors.parentName}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="parentContact" className="block text-sm font-semibold mb-2">
              Parent's Contact Number
            </label>
            <input
              type="text"
              id="parentContact"
              name="parentContact"
              value={formData.parentContact}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            {formErrors.parentContact && (
              <p className="text-red-600 text-sm">{formErrors.parentContact}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="enrollmentOption" className="block text-sm font-semibold mb-2">
              Enrollment Option
            </label>
            <select
              id="enrollmentOption"
              name="enrollmentOption"
              value={formData.enrollmentOption}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="fullDay">Full Day</option>
              <option value="halfDay">Half Day</option>
            </select>
          </div>
          <div className="mb-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="fromTime" className="block text-sm font-semibold mb-2">
                  From Time
                </label>
                <input
                  type="text"
                  id="fromTime"
                  name="fromTime"
                  value={formData.fromTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="toTime" className="block text-sm font-semibold mb-2">
                  To Time
                </label>
                <input
                  type="text"
                  id="toTime"
                  name="toTime"
                  value={formData.toTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
            {formErrors.time && <p className="text-red-600 text-sm">{formErrors.time}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-sm font-semibold mb-2">
              Reason
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            {formErrors.reason && (
              <p className="text-red-600 text-sm">{formErrors.reason}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Gate_Pass;
