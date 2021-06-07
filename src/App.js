import './App.css';
// import { BrowserRouter, Route } from 'react-router-dom'
import AddStd from './components/addwin/AddStd'
import EditStd from './components/editwin/EditStd'
import StdTable from './components/studentTab/StdTable'

function App() {
  return (
    <div className="App">
      <StdTable/>
      <AddStd/>
      <EditStd/>
    </div>
    
  );
}

export default App;
