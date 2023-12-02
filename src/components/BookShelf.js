import React from "react";
import Book from "./Book";


const BookShelf =(props={}) =>{


    return(
        <div className="book-shelf">
            <h1 className="your-search">Your Search here: </h1>
          {
            props.books.map(book=>{
              return <Book key={book.id} book={book}/>
            })
          }
        </div> 
    )
}

export default BookShelf