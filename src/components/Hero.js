import React from "react";
// import SearchForm  from "./SearchForm";


import DecideBookVideo from "./../images/DecideBook.mp4";

const Hero =() =>{
    return(
        <div className="hero-content">
            
           
            <video src={DecideBookVideo} autoPlay loop muted/>
            <h2 className="hero-slogan">DISCOVER YOUR CHAPTER</h2>
             {/* <p className="hero-text"></p> */}

        </div>
    )

}

export default Hero