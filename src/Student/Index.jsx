/* import { Provider } from 'react-redux'; */
import { Provider } from 'react-redux';
import { store } from './store';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

const Index = () => {
  return (
    <Provider store={store}>
        <StudentForm />
        <StudentList />
    </Provider>
  )
}

export default Index;