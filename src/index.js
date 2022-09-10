import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/home/Home';
import About from './Components/about/About';
import Events from './Components/activities/Events';
import Sermons from './Components/sermons/Sermons';
import Offering from './Components/giving/Offering';


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
