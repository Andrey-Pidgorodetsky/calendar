import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LeftBlock} from './components/Leftblock/LeftBlock';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/pages/Dashboard/Dashboard';
import { Inbox } from './components/pages/Inbox/Inbox';
import  CalendarTodos  from './components/pages/CalendarTodos/CalendarTodos';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className="App">  
        <div style={{display: "flex"}}>
          <LeftBlock/>    
          <Switch>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/inbox" component={Inbox}/>
            <Route path="/calendar" component={CalendarTodos}/>
          </Switch>
        </div> 
    </div>
  );
}

export default App;
