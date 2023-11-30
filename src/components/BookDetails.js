import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PiEyeClosedDuotone } from "react-icons/pi";
import axios from "axios"

const BookDetails =() =>{

    const {bookID} = useParams()
    //console.log("bb: ", bookID);
    const [book, setBook] = useState(null)
    console.log("biok:", book)
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('https://www.googleapis.com/books/v1/volumes/'+bookID)
          .then(d=>{
                setBook(d.data)
        })
    },[])

    return(
        <div className="details-overlay" >
            <div className="inner-overlay">
               <button className="close" onClick={() => navigate(-1)}><PiEyeClosedDuotone /></button>
                <div className="inner-box">
                   
                    
                    {book? 
                    <div>
                        <div className="info" style={{display: "flex", flexDirection: "row"}}>
                            <div>
                                <img src={book.volumeInfo.imageLinks?.smallThumbnail} alt=""/>
                            </div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <h1>{book.volumeInfo.title}</h1>
                                <h3>{book.volumeInfo.authors}</h3>
                                <h4>{book.volumeInfo.publisher} <span>{book.volumeInfo.publishedDate}</span></h4><br/>
                                <a href={book.volumeInfo.previewLink}><button>More</button></a>
                            </div>
                                
                        </div>
                        <h4 className="description">{book.volumeInfo.description}</h4>
                   </div>
                   : 
                   <></>
                   }
                </div>
               
            
            </div>
        </div>
    )

}

export default BookDetails