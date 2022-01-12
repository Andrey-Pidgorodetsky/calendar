import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { getTaskAction } from "../../../store/action/tasks-actions";

const style ={
    marginLeft:"200px", 
    marginTop:"10px", 
    background:"#D3D3D3", 
    height:"auto", 
    alignItems:"center",
    display:"flex",
    width:"500px", 
    border:"#C0C0C0 solid",
    borderRadius:"10px",
    justifyContent:"center",
}; 

export const Dashboard = (props) => { 
    const {tasks} = props;
    const {taskId} = useParams();

    const task = tasks.find(({id}) => id === Number(taskId));
    
    if (!task) {
        return (
            <div> 
                <span>Task not found</span>
            </div>
        );
    } 
    return (
        <div style={{marginTop:"50px"}}>
           <p>{ task.name }</p>
           <p>{ task.date }</p>
           <p>{ task.type }</p>
        </div>        
    );
};

const mapStateToProps = (state) => ({
    tasks: state.taskReducer.tasks,
    
  });
  
const mapDispatchToProps = (dispatch) => ({
    GET_TASK: () => dispatch(getTaskAction())
});

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard);
