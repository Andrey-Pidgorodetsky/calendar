import react from 'react';
import logo from './logo.svg';
import './App.css';
import { LeftBlock} from './components/Leftblock/LeftBlock';
import { Cards } from './components/Cards/Cards';


const component = () => null;

function App() {
  return (
    <div className="App">  
      <LeftBlock/>
      <Cards/> 
    </div>
  );
}

export default App;
