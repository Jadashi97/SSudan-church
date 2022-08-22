// import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>SouthSudanese Community Church</h1>
      <div>
            <Link to="/home">Home</Link> | {" "}
            <Link to="/about">About us</Link> | {" "}
            {/* <Link to="/events">Events</Link> | {" "}
            <Link to="/sermons">Sermons & Teaching</Link> | {" "}
            <Link to="/giving"><button>GIVE</button></Link> | {" "} */}
      </div>
    </div>
  );
}

export default App;
