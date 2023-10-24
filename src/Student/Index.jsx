import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

const Index = () => {
  return (
    <Provider store={store}>
      <div className="bg-[#090909] min-h-screen flex flex-col items-center justify-start pb-2">
        <header className="bg-blue-500 text-white py-4 w-full text-center">
          <h1 className="text-2xl font-bold">Student Management</h1>
        </header>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-900 p-4 shadow-md rounded-lg">
              <h2 className="text-xl text-white font-semibold mb-4">Add Student</h2>
              <StudentForm />
            </div>
            <div className="bg-gray-800 p-4 shadow-md rounded-lg max-h-[460px] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4 text-white">Student List</h2>
              <StudentList />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default Index;
