import Table from './Table';
import MonthData from './MonthData';
import DtChart from './DtChart';
import logo from './logo.svg';
import './style.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';


function App() {
const navigate=useNavigate()//declaring useNavigate
  
  return (
    <div className="App">
    <h1>MongoDB Aggregation Tasks</h1>
    {/*creating buttons for navigation*/}
    <div><button className='navigateButton' onClick={()=>{navigate('/')}}>Month's Table</button>
    <button className='navigateButton' onClick={()=>{navigate('/monthdata')}}>Month's Data</button>
    <button className='navigateButton' onClick={()=>{navigate('/datachart')}}>Month's Chart</button></div>
    {/*specifying routing paths*/}
    <Routes>
      <Route path='/' element={<Table></Table>}/>
      <Route path='/monthdata' element={<MonthData></MonthData>}/>
      <Route path='/datachart' element={<DtChart></DtChart>}/>
    </Routes>
    </div>
  );
}

export default App;
