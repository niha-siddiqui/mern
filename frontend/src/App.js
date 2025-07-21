import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SaveData from './components/SaveData';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ShowData from './components/ShowData';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route path= "/save" element={<SaveData/>}></Route>
        <Route path= "/show" element={<ShowData/>}></Route>
      </Routes>
      
   
      </div></BrowserRouter>
   
  );
}

export default App;
