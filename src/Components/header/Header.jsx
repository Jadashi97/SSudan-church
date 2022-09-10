import React from "react";
import {Link, Outlet } from "react-router-dom";
import "./header.css";
import Button from '@mui/material/Button';
import ChurchIcon from '@mui/icons-material/Church';



function Header(){

    return(
        <>
            <div >
                <nav>
                    {/* <img  alt="myimage" src={logo} ></img> */}
                    <div className="header">
                            <div className="heading">
                                <div className="churchIcon">
                                    <ChurchIcon/>
                                </div>
                                SouthSudanese
                                <br />
                                Community
                                <br />
                                Church 
                            </div>

                            <div className="links">

                                <Link to="/home">Home</Link> | {" "}
                                <Link to="/about">About us</Link> | {" "}
                                <Link to="/events">Events</Link> | {" "}
                                <Link to="/sermons">Sermons & Teaching</Link> | {" "}
                                <Link to="/Offering"><Button variant="contained">Offering</Button></Link> | {" "}
                            </div>        
                    </div>
                </nav>
                <Outlet/>   
            </div>
        </>

    )
}


export default Header;