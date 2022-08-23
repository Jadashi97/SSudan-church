import React from "react";
import {Link, Outlet } from "react-router-dom";
// import './App.css';


function Header(){
    return(
        <header>
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
        </header>

    )
}


export default Header;