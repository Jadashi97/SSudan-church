import React from "react";
import Carousel from "nuka-carousel/lib/carousel";
import pic11 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/southsudanese-church/src/pics/ss11.jpg";
import pic9 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/southsudanese-church/src/pics/ss9.jpg";
import pic10 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/southsudanese-church/src/pics/ss10.jpg";
import pic8 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/southsudanese-church/src/pics/ss8.JPG";
import  pic2 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/southsudanese-church/src/pics/ss3.jpg";

import "./events.css";




function Events(){
    return(
        <div>
            <div className="events-page">
                <h2 className="">Together we are stronger</h2>
                    <Carousel className="carousel-imgs"> 
                        <img src={pic11} alt="" width={900} height={700}  className="carousel-imgs" />
                        <img src={pic9} alt="" width={900} height={700}  className="carousel-imgs"/>
                        <img src={pic10} alt="" width={900} height={700} className="carousel-imgs" />
                        <img src={pic8} alt="" width={900} height={700} className="carousel-imgs" />
                        <img  alt="myimage" src={pic2} width={1000} height={700} className="carousel-imgs" ></img>
                    </Carousel> 
            </div>
            
            
        </div>
    )
}
export default Events;