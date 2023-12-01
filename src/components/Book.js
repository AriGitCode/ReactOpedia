import React from "react";
import {useNavigate} from "react-router-dom"

const Book =(props = {}) =>{

  const book = props.book
  const navigate = useNavigate();


    return(
      <div onClick={()=>{
        navigate("/bookdetails/" + book.id)
      }} className="book">
        <img src={book.volumeInfo.imageLinks?.smallThumbnail} alt=""/>
        <div className="bottom">
            <h3 className="title">{book.volumeInfo.title}</h3>
            <h3 className="title">Author: {book.volumeInfo.authors?.join(", ")}</h3>
        </div> 
        
      </div>   
    )

}

export default Book