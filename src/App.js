// import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav>
        <h1>SouthSudanese Community Church</h1>
        <div>
            <Link to="/home">Home</Link> | {" "}
            <Link to="/about">About us</Link> | {" "}
            <Link to="/events">Events</Link> | {" "}
            <Link to="/sermons">Sermons & Teaching</Link> | {" "}
            <Link to="/Offering"><button>Offering</button></Link> | {" "}
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
