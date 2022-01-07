// import { taskActions } from "./tasks.types";

const INITIAL_STATE = {
  tasks: [],
};

const taskReducer = (state = INITIAL_STATE, action) => {
    
    switch(action.type) { 
        case "ADD_TASK": 
            return {...state, tasks: [...state.tasks, action.payload]}
        case "DELL_TASK": 
            return {...state, tasks: [state.tasks.filter(task => task !== action.payload)]}        
        default:
            return {
                ...state
            }  
            
    }
}
export default taskReducer;