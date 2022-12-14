import React from "react";
import  pic1 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/southsudanese-church/src/pics/ss5.jpg"
import "./about.css"


function About() {
    return (
      <div className="about-us">
        <h2>BELIEFS, MISSION, OUTREACH AND COMMUNITY</h2>
        <img  alt="myimage" src={pic1} width={1000} height={700} className="about-img" ></img>
        <h2>Welcome</h2>
        <div className="about-1">
            <p> 
              We are happy that you are interested in learning more about SouthSudanese Community Church.</p>
            
            <p>Our prayer is that you'll find this as your community and your church home to praise and worship together.</p>  
            <p>
              We want you to feel at home from the very beginning. No matter what stage of life you are in, we want you to feel welcomed, encouraged, and cared for as you come to this wonderful and loving Community.</p>
             <p> We strive to be people who love each other well and point each other to Jesus.</p>
        </div>
              
      </div>
    );  
  }
  export default About;