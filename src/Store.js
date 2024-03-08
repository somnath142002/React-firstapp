import { createStore,combineReducers } from "redux"
import UserDetails from "./reducer"
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    combineReducers({
        userdetails:UserDetails,

    }),
   composeWithDevTools()
)

export default store;