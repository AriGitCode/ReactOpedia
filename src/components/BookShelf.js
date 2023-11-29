import React from "react";
import Book from "./Book";
// import { logDOM } from "@testing-library/react";

const BookShelf =() =>{

  const bookList = [
    {
      id: 1, 
      name: "Godfather",
      imgSrc: "https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png",
      author: "Francis Ford Coppola"
    },
    {
      id: 2, 
      name: "Monkey's pawn",
      imgSrc: "https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png",
      author: "Francis Ford Coppola"
    },
    {
      id: 3, 
      name: "Romeo & Juliett",
      imgSrc: "https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png",
      author: "Francis Ford Coppola"
    },
    {
      id: 4, 
      name: "some shitty book",
      imgSrc: "https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png",
      author: "Francis Ford Coppola"
    },
    {
      id: 5, 
      name: "dassd",
      imgSrc: "https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png",
      author: "Francis Ford Coppola"
    },
    {
      id: 6, 
      name: "dasdasd",
      imgSrc: "https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png",
      author: "Francis Ford Coppola"
    }
  ]

    return(
        <div className="book-shelf">
          {
            bookList.map(book=>{
              return <Book key={book.id} name={book.name} img={book.imgSrc} author={book.author}/>
            })
          }
        </div>
       
    )

}

export default BookShelf