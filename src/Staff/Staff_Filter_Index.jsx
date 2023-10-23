import { Provider } from 'react-redux'
import FilterStaff from './FilterStaff'
import { store_1 } from './store_1'

const Staff_Filter_Index = () => {
  return (
    <Provider store={store_1}>
        <FilterStaff/>
    </Provider>
  )
}

export default Staff_Filter_Index;
