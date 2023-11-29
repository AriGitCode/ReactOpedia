import React from "react";
//import Godfather from "./../images/Godfather.png";

const Book =(props = {}) =>{
  // console.log("ii: ", props.imgi);
    return(
      <div className="book">
        <img src={props.img} alt=""/>
        <div className="bottom">
            <h3 className="title">{props.name}</h3>
            <h3 className="title">{props.author}</h3>
            {/* <p className="amount"></p> */}
        </div>
      </div>   
    
    )

}

export default Book