import { Provider } from "react-redux"
import StaffForm from "./StaffForm"
import StaffList from "./StaffList"
import store_1 from "./store_1"


const Staff_Index = () => {
  return (
    <Provider store={store_1}>
        <StaffForm/>
        <StaffList/>
    </Provider>
  )
}

export default Staff_Index
