import React from "react";
import  pic1 from "../pics/ss5.jpg"


function About() {
    return (
      <div className="about-us">
        <h1>BELIEFS, MISSION, OUTREACH AND COMMUNITY</h1>
        <img  alt="myimage" src={pic1} width={1000} height={700} ></img>
        <h4>Welcome </h4>
        <div className="about-1">
            <p> 
              We are happy that you are interested in learning more about SouthSudanese Community Church. 
              Our prayer is that you'll find this as your community and your church home to praise and worship together. 

              We want you to feel at home from the very beginning. No matter what stage of life you are in, we want you to feel welcomed, encouraged, and cared for as you come to Grace. 
              We strive to be a people who love each other well and point each other to Jesus.
          </p>  
        </div>
      </div>
    );  
  }
  export default About;