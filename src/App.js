import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LeftBlock} from './components/Leftblock/LeftBlock';
import { Route, Switch } from 'react-router-dom';
import  Dashboard  from './components/pages/Dashboard/Dashboard';
import { Inbox } from './components/pages/Inbox/Inbox';
import  CalendarTodos  from './components/pages/CalendarTodos/CalendarTodos';
import 'antd/dist/antd.min.css';
import  Users  from './components/pages/Users/Users';

function App() {
  return (
    <div className="App">  
        <div style={{display: "flex"}}>
          <LeftBlock/>    
          <Switch>
            <Route path="/dashboard/:taskId" component={Dashboard}/>
            <Route path="/inbox" component={Inbox}/>
            <Route path="/calendar" component={CalendarTodos}/>
            <Route path="/users" component={Users}/>
          </Switch>
        </div> 
    </div>
  );
}

export default App;
