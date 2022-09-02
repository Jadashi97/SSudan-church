import React from "react";
import giving from "/Users/nyarjijada/Desktop/Personal-Main-Projects/southsudanese-church/src/pics/giving.jpg";
import "./offering.css";

function Offering(){
    return(
        <div className="giving-page">
            <h2>Giving</h2>
            <img src={giving} alt="givingImage" width={800} height={500}/>
            <br />
            <div className="how-to-give">
                <strong>Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.</strong>
                <p>This is a working page in progress... soon we will have links to cashapp and zelle inorder to give at your convinience</p>
            </div>

            
        </div>
    )
}

export default Offering;