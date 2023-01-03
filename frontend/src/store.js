import {combineReducers,applyMiddleware,createStore} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk'
import { userLoginreducer,userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
import {exerciseListReducer,exerciseCreateReducer,exerciseUpdateReducer,exerciseDeleteReducer,
 
} from './reducers/exerciseReducer'

const reducer=combineReducers({
    userLogin:userLoginreducer,
    userRegister:userRegisterReducer,
    exerciseListreducers:exerciseListReducer,
    createexercise:exerciseCreateReducer, 
    updateexercise:exerciseUpdateReducer,
    deleteexercise:exerciseDeleteReducer,
    userupdateprofile:userUpdateReducer,
})
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState={userLogin: { userInfo: userInfoFromStorage },};
const middleware=[thunk]
const store=createStore(
    reducer,
    initialState,
   composeWithDevTools(applyMiddleware(...middleware))
)
export default store