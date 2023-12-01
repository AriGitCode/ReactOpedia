import React, { useEffect, useState } from "react";
import Book from "./Book";
import { FcLike } from "react-icons/fc";

const Highlights = () => {
  const [likedBooks, setLikedBooks] = useState([]);

  useEffect(() =>{
	const myFavourites = JSON.parse(localStorage.getItem('likedBooks')) || [];
	setLikedBooks(myFavourites);
  }, []);

	return (
		<div className="highlights">
			<h1>YOUR SELECTED BOOKS<FcLike /> </h1>
			{likedBooks.length > 0 ? (
				<div className="book-list">
				    {likedBooks.map((book)=> (
						<Book key ={book.id} book ={book}/>
			    ))}
		        </div>
			) : (
				<p>NO SELECTED BOOKS YET...</p>
			)}
		</div>
	);
};

export default Highlights;
