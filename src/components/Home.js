import React, { useState } from "react";
import BookShelf from "./BookShelf";
import Hero from "./Hero";
import SearchForm from "./SearchForm";
const Home =() =>{

    const [books, setBooks] = useState([])

    

    return(
        <div className="main-content">
            <Hero />
            <SearchForm setBooks={setBooks}/>
            <BookShelf books={books}/>
            
          </div>
    )

}

export default Home