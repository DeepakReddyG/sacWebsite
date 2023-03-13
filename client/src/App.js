import './App.css';

//import javaScript files
import NavBar from './components/NavigationBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from '../src/pages/Home/Home'; 

//import other extensions 
import {Routes, Route } from 'react-router-dom';
 

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
