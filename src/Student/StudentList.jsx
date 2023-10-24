import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent, updateStudent } from "./studentSlice";

function StudentList() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [isEditing, setIsEditing] = useState(false); // State to control the editing popup
  const [isViewingDetails, setIsViewingDetails] = useState(false); // State to control the details popup
  const [validationError, setValidationError] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

  const handleEdit = (student) => {
    setEditId(student.id);
    setName(student.name);
    setAddress(student.address);
    setContact(student.contact);
    setIsEditing(true); // Open the editing popup
  };

  const handleDetails = (student) => {
    setSelectedStudent(student);
    setIsViewingDetails(true); // Open the details popup
  };

  const handleDeleteConfirmation = (student) => {
    setStudentToDelete(student);
    setIsDeleteConfirmationOpen(true);
  };

  const handleDeleteStudent = () => {
    dispatch(deleteStudent(studentToDelete.id));
    setStudentToDelete(null);
    setIsDeleteConfirmationOpen(false);
  };

  const handleCloseDeleteConfirmation = () => {
    setStudentToDelete(null);
    setIsDeleteConfirmationOpen(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name || !address || !contact) {
      setValidationError("Please fill in all fields.");
      return;
    }
    dispatch(updateStudent({ id: editId, name, address, contact }));
    setEditId(null);
    setName("");
    setAddress("");
    setContact("");
    setIsEditing(false); // Close the editing popup
    setValidationError(""); // Clear validation error
  };

  const handleCloseEdit = () => {
    setIsEditing(false); // Close the editing popup
    setValidationError(""); // Clear validation error
  };

  const handleCloseDetails = () => {
    setIsViewingDetails(false); // Close the details popup
    setSelectedStudent(null);
  };

  // Filter students based on the search query
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-4 p-4 ">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <button
          onClick={() => setSearchQuery("")}
          className="bg-gray-200 text-gray-600 p-2 rounded-md hover:bg-gray-300 transition-colors w-full"
        >
          Clear
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStudents.map((student) => (
          <div key={student.id} className="p-4 bg-white shadow-md rounded-lg">
            <div className="text-lg font-semibold">Name: {student.name}</div>
            <div className="text-gray-600">
              Address: {student.address.substring(0, 10)}...
            </div>
            <div className="text-gray-600">Contact: {student.contact}</div>
            <div className="mt-4 flex flex-col lg:flex-row space-x-2">
              <button
                onClick={() => handleEdit(student)}
                className="text-blue-500 hover:text-blue-700 flex-grow"
              >
                Edit
              </button>
              <button
                onClick={() => handleDetails(student)}
                className="text-green-500 hover:text-green-700 flex-grow"
              >
                Details
              </button>
              <button
                 onClick={() => handleDeleteConfirmation(student)}
                className="text-red-500 hover:text-red-700 flex-grow"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Editing Popup */}
      {isEditing && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-semibold mb-4">Edit Student</h2>
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={handleCloseEdit}
            >
              &#x2715;
            </button>
            <form onSubmit={handleUpdate}>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full p-2 border rounded-lg mb-2"
              />
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                className="w-full p-2 border rounded-lg mb-2"
              />
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Contact"
                className="w-full p-2 border rounded-lg mb-2"
              />
              {validationError && (
                <p className="text-red-500 text-sm">{validationError}</p>
              )}
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors w-full"
              >
                Update Student
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Details Popup */}
      {isViewingDetails && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm relative">
      <h2 className="text-2xl font-semibold mb-4">Student Details</h2>
      <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800" onClick={handleCloseDetails}>
        &#x2715;
      </button>
      <div>
        <div className="font-semibold">Name: {selectedStudent.name}</div>
        <div className="font-semibold">Address:</div>
        <div className="details-popup-content" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <p>{selectedStudent.address}</p>
        </div>
        <div className="font-semibold">Contact: {selectedStudent.contact}</div>
      </div>
    </div>
  </div>
)}

{isDeleteConfirmationOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-semibold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete {studentToDelete.name}?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleDeleteStudent}
                className="bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition-colors flex-grow"
              >
                Confirm
              </button>
              <button
                onClick={handleCloseDeleteConfirmation}
                className="bg-gray-300 text-gray-700 p-3 rounded-md hover:bg-gray-400 transition-colors flex-grow ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentList;
