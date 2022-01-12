import { combineReducers } from "redux";
import taskReducer from "./tasks-reducer";
import usersReducer from "./users-reducer";

const rootReducer = combineReducers({
   taskReducer,
   usersReducer
});

export default rootReducer;