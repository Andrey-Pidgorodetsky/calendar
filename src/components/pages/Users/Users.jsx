import React, { useState } from "react";
import { connect } from "react-redux";
import thunk from "redux-thunk";
import  {addUsersAction}  from "../../../store/action/users-actions";
import usersReducer from "../../../store/reducers/users-reducer";

export const Users = (users) => {
    const [userName, setUserName] = useState("")
    console.log(users)

    const handleUserName = (e) => {
        setUserName(e.target.value)
    };

    const handleAddUsers = () => {
        users.addUser({type: "users", name: userName, id: Date.now()})
        setUserName('')
    };

    return (
        <div style={{marginLeft:"200px" , marginTop:"50px"}}>
            <input value={userName} placeholder="Enter name" onChange={handleUserName}/>
            <button onClick={handleAddUsers}>Add</button>
            <div>
                {users.users.map( (user) => {
                    return (
                        <div>{user.name}</div>)
                }
                )}
                
            </div>
        </div>
        
    )
};

const mapStateToProps = (state) => ({
    users: state.usersReducer.users,
  
  });

const mapDispatchToProps = (dispatch) => ({
    addUser: (user) => dispatch(addUsersAction(user)),
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Users);
  
  