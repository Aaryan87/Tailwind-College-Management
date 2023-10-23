import { Provider } from 'react-redux';
import { store_1 } from './store_1';
import StaffForm from './StaffForm';
import StaffList from './StaffList';

const Index1 = () => {
  return (
    <Provider store={store_1}>
        <StaffForm />
        <StaffList />
    </Provider>
  )
}

export default Index1;
