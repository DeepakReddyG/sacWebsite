import './App.css';
import { 
  Routes,
  Route, 
  Link,
  Outlet 
} from 'react-router-dom';

// import js files here
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'; 
import Home from './Pages/HomePage/Home';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
