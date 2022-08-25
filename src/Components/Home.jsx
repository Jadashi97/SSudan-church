import React from "react";
import  pic2 from "../pics/ss2.jpg"



function Home(){
    return(
        <div >
            <img  alt="myimage" src={pic2} width={1000} height={700} ></img>
            <div className="home-page">
                <h4>Our Mission</h4>
                <p>
                    As a Community, we aim to glorify God by making disciples by reaching and teaching all people with the life-changing message of Jesus Christ.
                    
                    We believe that God's justifying grace must not be separated from His sanctifying power and purpose. 
                    God commands us to love Him supremely and others sacrificially, and to live out our faith with care for one another, 
                    compassion toward the poor and justice for the oppressed. With God's Word, the Spirit's power, and fervent prayer in Christ's name, 
                    we are to combat the spiritual forces of evil. 
                    In obedience to Christ's commission, we are to make disciples among all people, always bearing witness to the gospel in word and deed. 
                </p>
            </div>
        </div>

    )
}


export default Home;