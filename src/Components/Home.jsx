import React from "react";
import { Link} from "react-router-dom";


function Home(){
    return(
        <div>
            <h2>This is the Home page for the website</h2>
            <p>yaassaaalllaaaam!!! we are here finally!!</p>

            <nav>
            <Link to="/about">Home</Link>
            </nav>
        </div>

    )
}


export default Home;