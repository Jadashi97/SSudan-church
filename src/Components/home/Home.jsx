import React from "react";
import  pic2 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/southsudanese-church/src/pics/ss3.jpg";
import "./home.css";



function Home(){
    return(
        <div >
            <div className="home-page">
                <img  alt="myimage" src={pic2} width={1000} height={700} ></img>
                <h2>Our Mission</h2>
                <div className="homely">
                    <p>As a Community, we aim to glorify God by making disciples by reaching and teaching all people with the life-changing message of Jesus Christ.</p>
                    <p>We believe that God's justifying grace must not be separated from His sanctifying power and purpose.</p>
                    <p>God commands us to love Him supremely and others sacrificially, and to live out our faith with care for one another, 
                    compassion toward the poor and justice for the oppressed. With God's Word, the Spirit's power, and fervent prayer in Christ's name, 
                    we are to combat the spiritual forces of evil. </p>
                    <p>In obedience to Christ's commission, we are to make disciples among all people, always bearing witness to the gospel in word and deed. </p>
                </div>
            </div>
        </div>

    )
}


export default Home;