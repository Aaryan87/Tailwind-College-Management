import { Provider } from 'react-redux'
import Filter from './Filter'
import store_1 from './store_1'

const Staff_Filter_Index = () => {
  return (
    <Provider store={store_1}>
        <Filter/>
    </Provider>
  )
}

export default Staff_Filter_Index