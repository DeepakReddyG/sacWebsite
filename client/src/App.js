import './App.css';
import { BrowserRouter,
  Routes,
  Route, 
  Link,
  Outlet 
} from 'react-router-dom';

// import js files here
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
