import React, {useEffect, useState} from "react";
import { Calendar, DatePicker, Badge } from 'antd';
import { Button, Input } from "@material-ui/core";
import { connect } from 'react-redux';
import { addTaskAction, deleteTaskAction } from "../../../store/action/tasks-actions";
import { TasksList } from "./TasksList";
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Dashboard } from "../Dashboard/Dashboard";
moment.locale('zh-cn');

export function getListData(tasks) {
  if (!tasks) {
    return [];
  };
    return tasks.map(({name, type}) => {
      return {
        type: type,
        content: name
      }
    })
};

function addZero (numb) {
  return String(numb).length === 1 ? `0${numb}`: numb
}

function dateCellRender(value, tasks) {
  const day = addZero(value.get('date'));
  const month = addZero(value.get('month') +1);
  const year = value.get('year');
  const data= `${year}-${month}-${day}`

  const tasksFilter = tasks.filter((task) => {
    return data === task.date
  });

  const listData = getListData(tasksFilter)

  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

export const CalendarTodos = (props) => {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");
  const [typeTask, setTypeTask] = useState("");
  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value)
  };

  const handleDatePiker = (date, dateString) => {
    setDate(dateString)
  };

  const handlTypeTaskChange = (e) => {
    setTypeTask(e.target.value)
  };

  const handlAddTask = () => {
    props.addTask({type: typeTask, date: date, name: taskName, id: Date.now()})
    setTaskName('')
  };

  const handlDeletTask = (task) => {
    props.dellTask(task.id)
  };
 
    return ( 
      <div>
        <Input value={taskName} placeholder="Enter task name" onChange={handleTaskNameChange}/>
        <DatePicker onChange={handleDatePiker}/>
      
        <select onChange={handlTypeTaskChange}>
              <option value="default"></option>
              <option value="success">success</option>
              <option value="processing">processing</option>
              <option value="warning">warning</option>
              <option value="error">error</option>
        </select> 
        <Button style={{
          background:"#E0FFFF",   
          width:"10px",
          height:"25px",
          fontSize:"60%",
          border:'solid'
        }} onClick={handlAddTask}>Add task</Button>
      
        <TasksList {...props} handler={handlDeletTask} handDashboardTask/> 
        <Calendar 
           dateCellRender={(value) => dateCellRender(value, props.tasks)} 
        />
      </div>
    );
};

const mapStateToProps = (state) => ({
  tasks: state.taskReducer.tasks,

});

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTaskAction(task)),
  dellTask: (task) => dispatch(deleteTaskAction(task)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarTodos);


