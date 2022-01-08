import React from "react";


export const TasksList = (props) => {
  console.log(props)
  
  const handlDeletTask = (props) => {
    props.dellTask(props.id)
  };

  return (
    <div>
    { 
      props.tasks.length >= 0 ?
        props.tasks.map(task => 
          <div >{task.name}
            {task.name.length> 0 ? 
                <button 
                  onClick={() => {handlDeletTask(task)}}
                  style={{backgroundColor:" Transparent", border: "none"}}
                > &#10060;
                </button>
              : null 
            }                    
          </div>
        ) : 
        <div> {null} </div>
    }
    </div>
  )
}
