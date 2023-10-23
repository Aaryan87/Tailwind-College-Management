import { Provider } from 'react-redux'
import FilterStudent from './FilterStudent'
import { store } from './store'

const Student_Filter_Index = () => {
  return (
    <Provider store={store}>
        <FilterStudent/>
    </Provider>
  )
}

export default Student_Filter_Index;
