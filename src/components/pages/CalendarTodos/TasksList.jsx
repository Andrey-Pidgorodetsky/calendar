import React from "react";
import { useHistory } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";


export const TasksList = (props) => {
  const history = useHistory("/");

  const navigateToDashboard = (taskId) => { 
    history.push(`/dashboard/${taskId}`);
  };

  return (
    <div>
    { 
      props.tasks.length >= 0 ?
        props.tasks.map(task => 
          <div >{task.name}
            {task.name.length> 0 ? 
               <div> <button 
                  onClick={() => navigateToDashboard(task.id)}
                  style={{backgroundColor:" Transparent", border: "none"}}
                > &#9998;
                </button> 
                <button 
                  onClick={() => {props.handler(task)}}
                  style={{backgroundColor:" Transparent", border: "none"}}
                > &#10060;
                </button> 
                </div>
              : null 
            }                    
          </div>
        ) : 
        <div> {null} </div>
        
    }
    </div>
  )
}
