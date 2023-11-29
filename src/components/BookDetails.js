import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

const BookDetails =() =>{

    const {bookID} = useParams()
    ///console.log("bb: ", bookID);

    const [book, setBook] = useState(null)
    console.log("biok:", book)

    useEffect(()=>{
        axios.get('https://www.googleapis.com/books/v1/volumes/'+bookID)
          .then(d=>{
                setBook(d.data)
        })
    },[])

    return(
        <div>
         BookDetails
         {book? 
            <div>
                {book.volumeInfo.title}
                {book.volumeInfo.description}

            </div>
            : 
            <></>
         }
        </div>
    )

}

export default BookDetails