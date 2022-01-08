import React, {useEffect, useState} from "react";
import { Calendar, DatePicker, Badge } from 'antd';
import { Button, Input } from "@material-ui/core";
import { connect, useDispatch, useSelector} from 'react-redux';
import { addTaskAction, delTaskAction } from "../../../store/action/tasks-actions";
import rootReducer from "../../../store/reducers/root-reduce";
import { TasksList } from "./TasksList";


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

  const handlDeletTask = (props) => {
    props.dellTask(props.id)
  };

    return (
      <div>
        <Input value={taskName} placeholder="Enter task name" onChange={handleTaskNameChange}/>
        <DatePicker onChange={handleDatePiker}/>
        <Button style={{background:"#E0FFFF"}} onClick={handlAddTask}>Add task</Button>
        <TasksList {...props}  /> 
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
  dellTask: (task) => dispatch(delTaskAction(task)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarTodos);
