import React, { useEffect, useState } from "react";
import Book from "./Book";
import { FcLike } from "react-icons/fc";

const Highlights = () => {
  const [likedBooks, setLikedBooks] = useState([]);

  useEffect(() => {
    const myFavourites = JSON.parse(localStorage.getItem('likedBooks')) || [];
    setLikedBooks(myFavourites);
  }, []);

  return (
    <div className="highlights">
      {likedBooks.length > 0 ? (
        <h1 className="highlights-title">YOUR SELECTED BOOKS <FcLike /></h1>
      ) : (
        <h1 className="highlights-title">NO SELECTED BOOKS YET...</h1>
      )}
      
      {likedBooks.length > 0 ? (
        <div className="book-list">
          {likedBooks.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Highlights;

