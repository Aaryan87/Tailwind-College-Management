import { Provider } from 'react-redux';
import { store_1 } from './store_1';
import StaffForm from './StaffForm';
import StaffList from './StaffList';

const Index1 = () => {
  return (
    <Provider store={store_1}>
      <div className="bg-[#090909] min-h-screen flex flex-col items-center justify-start pb-2">
        <header className="bg-blue-500 text-white py-4 w-full text-center">
          <h1 className="text-2xl font-bold">Staff Management</h1>
        </header>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-900 p-4 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-white">Add Staff</h2>
              <StaffForm />
            </div>
            <div className="bg-gray-900 p-4 shadow-md rounded-lg max-h-[460px] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4 text-white">Staff List</h2>
              <StaffList />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default Index1;
