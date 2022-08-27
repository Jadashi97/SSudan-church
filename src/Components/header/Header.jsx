import React, { useState } from "react";
import {Link, Outlet } from "react-router-dom";
import "./header.css";
// import  logo from "../pics/logo.png"

// import './App.css';


function Header(){

    return(
        <>
            <div >
                <nav>
                    {/* <img  alt="myimage" src={logo} ></img> */}
                    <div className="header">
                        <h1>
                            SouthSudanese 
                            Community 
                            Church
                        </h1>   
                        <Link to="/home">Home</Link> | {" "}
                        <Link to="/about">About us</Link> | {" "}
                        <Link to="/events">Events</Link> | {" "}
                        <Link to="/sermons">Sermons & Teaching</Link> | {" "}
                        <Link to="/Offering"><button>Offering</button></Link> | {" "}
                    </div>
                </nav>
                <Outlet/>   
            </div>
        </>

    )
}


export default Header;