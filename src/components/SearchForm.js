import axios from "axios";
import React, { useState } from "react";
import { BsSearchHeart } from "react-icons/bs";

const SearchForm = () => {
  const [search, setSearch] = useState('');

  const searchBook = (e) => {
    if (e.key === "Enter") {
      // const searchTerm = e.target.value;
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCL81PxIBZ-aa481GhiJ2yOf2pvPqKb790')
      .then(res=>console.log(res.data.items))
      .catch(err=>console.log(err))
    }
  };

  return (
    <form className="search-form" style={{ position: "absolute", top: 390, display: "flex", alignItems: "center" }}>
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={searchBook}
      />
      <button type="submit">
        <BsSearchHeart className="icon" size={32} />
      </button>
    </form>
  );
};

export default SearchForm;
