import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SaveData from './components/SaveData';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.js'; 
import ShowData from './components/ShowData';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route path= "/save" element={<SaveData/>}/>
        <Route path= "/show" element={<ShowData/>}/>
        <Route path= "/login" element={<Login/>}/>

      </Routes>
      
   
      </div></BrowserRouter>
   
  );
}

export default App;
