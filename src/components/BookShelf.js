import React from "react";
import Book from "./Book";
// import { logDOM } from "@testing-library/react";

const BookShelf =(props={}) =>{


    return(
        <div className="book-shelf">
          {
            props.books.map(book=>{
              return <Book key={book.id} book={book}/>
            })
          }
        </div>
       
    )

}

export default BookShelf