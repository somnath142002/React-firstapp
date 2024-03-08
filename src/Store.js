import { createStore,combineReducers } from "redux"
import UserDetails from "./reducer"


const store = createStore(
    combineReducers({
        userdetails:UserDetails,

    }),
   
)

export default store;