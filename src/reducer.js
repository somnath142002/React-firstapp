// import actionTypes from '../src/actionTypes';
import {actionTypes} from '../src/actionTypes'

const initialState={
    firstName: "initial frst",
    lastName:"intial last",
}
const UserDetails=(state=initialState,action)=>{

    switch(action.type){
        case "FIRST_NAME":
            return{
                ...state,firstName: action.payload
            }
            default:
                return initialState;
    }

}
export default UserDetails;