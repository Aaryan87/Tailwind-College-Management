import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteStaff, updateStaff } from "./staffSlice";

function StaffList() {
  const dispatch = useDispatch();
  const staff = useSelector((state) => state.staff);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [viewingDetailsId, setViewingDetailsId] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const [validationError, setValidationError] = useState("");

  const handleEdit = (staffMember) => {
    setEditId(staffMember.id);
    setName(staffMember.name);
    setAddress(staffMember.address);
    setContact(staffMember.contact);
  };
  const handleCloseEdit = () => {
    setEditId(""); // Close the editing popup
    setValidationError(""); // Clear validation error
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name || !address || !contact) {
      setValidationError("Please fill in all fields.");
      return;
    }
    dispatch(updateStaff({ id: editId, name, address, contact }));
    setEditId(null);
    setName("");
    setAddress("");
    setContact("");
    setValidationError(""); // Clear validation error
  };

  const handleViewDetails = (staffMember) => {
    setViewingDetailsId(staffMember.id);
  };

  const handleCloseDetails = () => {
    setViewingDetailsId(null);
    setValidationError(""); // Clear validation error
  };

  const filteredStaff = staff.filter((staff) =>
    staff.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const [staffToDelete, setStaffToDelete] = useState(null);

  // Function to open the delete confirmation dialog
  const openDeleteConfirmation = (staffMember) => {
    setStaffToDelete(staffMember);
    setIsDeleteConfirmationOpen(true);
  };

  // Function to close the delete confirmation dialog
  const closeDeleteConfirmation = () => {
    setStaffToDelete(null);
    setIsDeleteConfirmationOpen(false);
  };

  // Function to confirm and delete staff
  const confirmDeleteStaff = () => {
    dispatch(deleteStaff(staffToDelete.id));
    closeDeleteConfirmation();
  };

  return (
    <div className="mt-4 p-4 bg-gray-800 rounded-lg">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-lg mb-2 bg-gray-600 text-white"
        />
        <button
          onClick={() => setSearchQuery("")}
          className="bg-gray-200 text-gray-600 p-2 rounded-md hover:bg-gray-300 transition-colors w-full"
        >
          Clear
        </button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStaff.map((staffMember) => (
          <li
            key={staffMember.id}
            className="p-4 bg-white/75 shadow-md rounded-lg "
          >
            <div className="text-lg font-semibold">
              Name: {staffMember.name}
            </div>
            <div className="text-gray-600">
              Address: {staffMember.address.substring(0, 10)}...
            </div>
            <div className="text-gray-600">Contact: {staffMember.contact}</div>
            <div className="mt-4 flex flex-col lg:flex-row space-x-2">
              <button
                onClick={() => handleEdit(staffMember)}
                className="text-blue-500 hover:text-blue-700 flex-grow"
              >
                Edit
              </button>
              <button
                onClick={() => handleViewDetails(staffMember)}
                className="text-green-500 hover:text-green-700 flex-grow"
              >
                Details
              </button>
              <button
                onClick={() => openDeleteConfirmation(staffMember)}
                className="text-red-500 hover:text-red-700 flex-grow"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editId && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm relative">
            <h2 className="text-2xl font-semibold mb-4">Edit Staff</h2>
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
                Update Staff
              </button>
            </form>
          </div>
        </div>
      )}
      {viewingDetailsId && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm relative">
            <h2 className="text-2xl font-semibold mb-4">Staff Details</h2>
            <button
              className="absolute top-4 right-4 text-gray-600 hover-text-gray-800"
              onClick={handleCloseDetails}
            >
              &#x2715;
            </button>
            <div>
              <div className="font-semibold">
                Name:{" "}
                {staff.find((member) => member.id === viewingDetailsId)?.name}
              </div>
              <div className="font-semibold">Address:</div>
              <div
                className="details-popup-content"
                style={{ maxHeight: "300px", overflowY: "auto" }}
              >
                <p>
                  {
                    staff.find((member) => member.id === viewingDetailsId)
                      ?.address
                  }
                </p>
              </div>
              <div className="font-semibold">
                Contact:{" "}
                {
                  staff.find((member) => member.id === viewingDetailsId)
                    ?.contact
                }
              </div>
            </div>
          </div>
        </div>
      )}
      {isDeleteConfirmationOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm relative">
            <h2 className="text-2xl font-semibold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete {staffToDelete.name}?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={confirmDeleteStaff}
                className="bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition-colors flex-grow"
              >
                Confirm
              </button>
              <button
                onClick={closeDeleteConfirmation}
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

export default StaffList;
