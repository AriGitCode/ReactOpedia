import React from "react";
import Godfather from "./../images/Godfather.png";

const Book =() =>{
    return(
        <div book-shelf>
         
            <div className="book">
              <img src={Godfather} alt=""/>
              <div className="bottom">
                 <h3 className="title">Eloquent JavaScript</h3>
                 {/* <p className="amount"></p> */}
              </div>
            </div>   
        </div>
       
    )

}

export default Book