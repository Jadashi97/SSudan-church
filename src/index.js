import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Events from './Components/Events';
import Sermons from './Components/Sermons';
import Offering from './Components/Offering';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}>
              <Route path="Home" element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Events" element={<Events/>}/>
                <Route path="Sermons" element={<Sermons/>}/>
                <Route path="Offering" element={<Offering/>}/> 
            </Route>
          </Routes>
        </BrowserRouter>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
