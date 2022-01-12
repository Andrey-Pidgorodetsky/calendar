const INITIAL_STATE = {
    users: [],
  };

const usersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) { 
        case "ADD_USERS":
            return {...state, users: [...state.users, action.payload]}
        default:
            return {
                ...state
            }  
            
    }
}

export default usersReducer;