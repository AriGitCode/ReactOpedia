import React, {useState} from "react";
import { BsSearchHeart } from "react-icons/bs";
import  "./SearchForm.css";



const SearchForm = ({ onSearch }) => {
   
    const [query, setQuery] = useState('');
  
    const handleInputChange = (e) => {
      setQuery(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query);
    };
    return(
        <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">  <BsSearchHeart className="icon" size={32} /></button>
      </form>

     
    )

}

export default SearchForm

