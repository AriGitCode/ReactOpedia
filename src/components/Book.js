import React from "react";
import {useNavigate} from "react-router-dom"

const Book =(props = {}) =>{

  const book = props.book
  const navigate = useNavigate();

  if (!book || !book.volumeInfo || !book.volumeInfo.imageLinks) {
    // If book or its volumeInfo or imageLinks are undefined, return null or a placeholder
    return null; 
  }

  const { title, authors, imageLinks } = book.volumeInfo;


    return(
      <div onClick={()=>{
        navigate("/bookdetails/" + book.id)
      }} className="book">
        <img src={imageLinks?.smallThumbnail} alt=""/>
        <div className="bottom">
            <h3 className="title">{title}</h3>
            <h3 className="title">Author: {authors?.join(", ")}</h3>
        </div> 
        
      </div>   
    )

}

export default Book