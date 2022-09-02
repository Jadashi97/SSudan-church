import React from "react";
import {Link, Outlet } from "react-router-dom";
import "./header.css";
import Button from 'react-bootstrap/Button';
// import  logo from "../pics/logo.png"



function Header(){

    return(
        <>
            <div >
                <nav>
                    {/* <img  alt="myimage" src={logo} ></img> */}
                    <div className="header">
                        <div className="heading">
                            <h1>SouthSudanese </h1>
                            <h1>Community</h1>
                            <h1>Church</h1> 
                        </div>
                            
                        <div className="links">
                            <Link to="/home">Home</Link> | {" "}
                            <Link to="/about">About us</Link> | {" "}
                            <Link to="/events">Events</Link> | {" "}
                            <Link to="/sermons">Sermons & Teaching</Link> | {" "}
                            <Link to="/Offering"><Button variant="primary">Offering</Button></Link> | {" "}
                        </div>        
                    </div>
                </nav>
                <Outlet/>   
            </div>
        </>

    )
}


export default Header;