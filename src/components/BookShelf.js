import React from "react";
import Book from "./Book";
import { logDOM } from "@testing-library/react";

const BookShelf =() =>{

  const bookList = [
    {
      
      name: "Godfather",
      imgSrc: "https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png",
      author: "Francis Ford Coppola"
    },
    {
      name: "Monkey's pawn",
      imgSrc: "https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png"
    },
    {
      name: "Romeo & Juliett",
      imgSrc: "https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png"
    },
    {
      name: "some shitty book",
      imgSrc: "https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png"
    },
    {
      name: "dassd",
      imgSrc: "https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png"
    },
    {
      name: "dasdasd",
      imgSrc: "https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png"
    }
  ]

    return(
        <div className="book-shelf">
          {
            bookList.map(book=>{
              console.log("wqtfL ", book.imgSrc, book.author)
              return <Book name={book.name} img={book.imgSrc} author={book.author}/>
            })
          }
        </div>
       
    )

}

export default BookShelf