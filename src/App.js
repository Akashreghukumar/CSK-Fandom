import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Home/Navbar';
import Container1 from './Components/Home/Container1';
import Container2 from './Components/Home/Container2';
import MousePointer from './CommonComponents/MousePointer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Team from './Components/Team/Team';

function App() {
  return (
    <div style={{position:"relative"}} className="App">
      
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/team' element={<Team/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
