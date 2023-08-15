import React from "react";
import companyLogo from './img/Scarecrow.png';


function Main(){
    return(
        <div className="main">
             <div className="main-img">
             <img src={companyLogo}/>
             </div>
             <div className="text">
                <h1 className="heading">I Have Bad news For You</h1>
                <p>The page you are looking for might be removed or is temporarily unavailable</p>
                <button>Back to homepage</button>
             </div>
             
        </div>
    )
}

export default Main