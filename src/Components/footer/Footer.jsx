import React from "react";
// import {Link, Outlet } from "react-router-dom";
import "./footer.css"



function Footer(){
    return(
        <div>
            <div className="footer">
                <div className="address">
                    <strong>
                        755 73rd Ave NE, 
                        <br />
                        Minneapolis,
                        <br />
                        MN 55432
                    </strong>
                    
                </div>
                <div className="footer-links">
                    <a href="/home">Home</a> |
                    <a href="/about">About us</a> |
                    <a href="/events">Events</a> |
                    <a href="/sermons">Sermons & Teaching</a> |
                    <a href="/Offering"><button><strong>Offering</strong></button></a> |
                </div> 
                <div className="short">
                    <strong>
                        South
                        <br />
                        Sudanese 
                        <br />
                        Community
                        <br />
                        Church
                    </strong>
                </div>
            </div>
        </div>
    )
}


export default Footer;