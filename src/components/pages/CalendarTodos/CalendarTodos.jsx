import React, {useEffect, useState} from "react";
import { Calendar, DatePicker, Badge } from 'antd';
import { Button, Input } from "@material-ui/core";
import { connect, useDispatch, useSelector} from 'react-redux';
import { addTaskAction, dellTaskAction } from "../../../store/action/tasks-actions";
import rootReducer from "../../../store/reducers/root-reduce";


export function getListData(value) {
    let listData;
    switch (value.date()) {
      case 2:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;

    }
    return listData || [];
  };
  

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  
  function getMonthData(value) {
      return 
    
  };
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

export const CalendarTodos = (props) => {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value)
  };

  const handleDatePiker = (date, dateString) => {
    setDate(dateString)
  };

  const handlAddTask = () => {
    props.addTask({date: date, name: taskName, id: Date.now()})
    setTaskName('')
  };

  const handlDeletTask = (task) => {
    props.dellTask(task.id)
  };

    return (
        <div>
            <Input value={taskName} placeholder="Enter task name" onChange={handleTaskNameChange}/>
            <DatePicker onChange={handleDatePiker}/>
            <Button style={{background:"#E0FFFF"}} onClick={handlAddTask}>Add task</Button>
            <div> { 
            props.tasks.length >= 0 ?
                props.tasks.map(task => 
                <div >{task.name}
                  {task.name.length> 0 ? 
                    <button 
                      onClick={ () => { handlDeletTask(task) } } 
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
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
            <p>CalendarTodos</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks

});

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTaskAction(task)),
  dellTask: (task) => dispatch(dellTaskAction(task)),
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarTodos);
