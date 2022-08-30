import React from "react";
// import {Link, Outlet } from "react-router-dom";
import "./footer.css"



function Footer(){
    return(
        <div>
            <div className="footer">
                <div className="address">
                    <p>715 fridley </p>
                    <p>MN</p>
                    <p>MN</p> 
                </div>
                <div className="footer-links">
                    <a href="/home">Home</a> |
                    <a href="/about">About us</a> |
                    <a href="/events">Events</a> |
                    <a href="/sermons">Sermons & Teaching</a> |
                    <a href="/Offering"><button>Offering</button></a> |
                </div> 
            </div>
        </div>
    )
}


export default Footer;