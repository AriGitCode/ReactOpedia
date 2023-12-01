
import React,{useState} from "react";
import DecideBookVideo from "./../images/girl.mp4";


const Hero =() =>{
    return(
        <>
        <div className="hero-content">
        
            <video src={DecideBookVideo} autoPlay loop muted/>
             <h2 className="slogan">DISCOVER YOUR CHAPTER</h2>
             
        </div>
       
        </>
    )

}

export default Hero