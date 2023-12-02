import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PiEyeClosedDuotone } from "react-icons/pi";
import { GrFavorite } from "react-icons/gr";
import axios from "axios";

const BookDetails = () => {
  const { bookID } = useParams();
  const [book, setBook] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${bookID}`)
      .then((response) => {
        setBook(response.data);
        const likedBooks = JSON.parse(localStorage.getItem('likedBooks')) || [];
        const likedBook = likedBooks.some((b) => b.id === response.data.id);
        console.log(likedBook);
        setIsLiked(likedBooks.some((b) => b.id === response.data.id));
      })
      .catch((error) => {
        console.error("Error fetching book details: ", error);
      });
  }, [bookID]);

  const addToLikedBooks = () => {
    if (book) {
      const likedBooks = JSON.parse(localStorage.getItem('likedBooks')) || [];

      const bookExistsIndex = likedBooks.findIndex((existingBook) => existingBook.id === book.id);

      console.log(bookExistsIndex);

      if (bookExistsIndex === -1) {
        likedBooks.push(book);
      } else {
        likedBooks.splice(bookExistsIndex, 1); // Remove the book from likedBooks if already liked
      }

      localStorage.setItem('likedBooks', JSON.stringify(likedBooks));
      setIsLiked(!isLiked); // Toggle the liked state
    }
  };

  const stripHtmlTags = (html) => {
    if (!html || typeof html !== "string") return "";
    return html.replace(/<[^>]+>/g, "");
  };

  return (
    <div className="details-overlay">
      <div className="inner-overlay">
        <button className="close" onClick={() => navigate(-1)}><PiEyeClosedDuotone /></button>
        <button onClick={addToLikedBooks}>{isLiked ? 'Unlike' : 'Like'} <GrFavorite /></button>
        
        {book ? (
          <div className="inner-box">
            <div className="info" style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <img src={book.volumeInfo.imageLinks?.smallThumbnail} alt="" />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1>{book.volumeInfo.title}</h1>
                <h3>{book.volumeInfo.authors}</h3>
                <h4>{book.volumeInfo.publisher} <span>{book.volumeInfo.publishedDate}</span></h4><br />
                <a href={book.volumeInfo.previewLink}><button>More</button></a>
              </div>
            </div>
            <h4 className="description">{stripHtmlTags(book.volumeInfo.description)}</h4>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default BookDetails;

// import React, {useState, useEffect} from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { PiEyeClosedDuotone } from "react-icons/pi";
// import axios from "axios";
// import { GrFavorite } from "react-icons/gr";

// const BookDetails =() =>{

//     const {bookID} = useParams()
//     const [book, setBook] = useState(null)
//     const [isLiked, setIsLiked] = useState(false);
//     const navigate = useNavigate();

//     useEffect(()=>{
//         axios.get('https://www.googleapis.com/books/v1/volumes/'+bookID)
//         .then(response=>{
//             setBook(response.data);
//             const likedBooks = JSON.parse(localStorage.getItem('likedBooks')) || [];
//             console.log("ff: ", likedBooks);
//             //console.log("cc: ", likedBooks.findIndex("bookID"))
//             let book = likedBooks.findIndex(book => book === bookID) === -1 ? false : true
//             setIsLiked(book);
//           })
//         .catch(error =>{
//             console.error("Error fetching book details: ", error);
//         })
//     },[bookID])

  
   

//     const stripHtmlTags = (html) => {
//         if (!html || typeof html !== "string") return "";
//         return html.replace(/<[^>]+>/g, "");
//       };

//     return(
//         <div className="details-overlay" >
//             <div className="inner-overlay">
//                <button className="close" onClick={() => navigate(-1)}><PiEyeClosedDuotone /></button>
//                <button onClick={()=>{
//                     setIsLiked(liked=>!liked)
//                     let likedBooks = JSON.parse(localStorage.getItem('likedBooks')) || [];
//                     if(isLiked){
//                         likedBooks = likedBooks.filter(book => book !== bookID)
//                         localStorage.setItem("likedBooks", JSON.stringify(likedBooks))
//                     }
//                     else{
//                         likedBooks.push(bookID)
//                         localStorage.setItem("likedBooks", JSON.stringify(likedBooks))
//                     }
//                }}>{isLiked ? 'Unlike' : 'Like'} <GrFavorite /></button>
//                 <div className="inner-box">

                   
                    
//                     {book? 
//                     <div>
//                         <div className="info" style={{display: "flex", flexDirection: "row"}}>
//                             <div>
//                                 <img src={book.volumeInfo.imageLinks?.smallThumbnail} alt=""/>
//                             </div>
//                             <div style={{display: "flex", flexDirection: "column"}}>
                               
//                                 <h1>{book.volumeInfo.title}</h1>
//                                 <h3>{book.volumeInfo.authors}</h3>
//                                 <h4>{book.volumeInfo.publisher} <span>{book.volumeInfo.publishedDate}</span></h4><br/>
//                                 <a href={book.volumeInfo.previewLink}><button>More</button></a>
                                
//                             </div>
                                
//                         </div>
//                         <h4 className="description">{stripHtmlTags(book.volumeInfo.description)}</h4>
//                    </div>
//                    : 
//                    <></>
//                    }
//                 </div>
               
            
//             </div>
//         </div>
//     )

// }

// export default BookDetails





// // const addToLikedBooks=()=>{
// //     console.log(book); //this is the book we will add to the likeBooks array. It comes from state
// //     const likedBooks = JSON.parse(localStorage.getItem('likedBooks')) || []; //if there is a likedbooks, then grab, otherwise we begin with empty array.
    
// //     // Check if the book already exists in the array
// //     // Assuming each book has a unique 'title' property
// //     const bookExists = likedBooks.some(existingBook => existingBook.id === book.id);

// // // Only add the book if it doesn't already exist
// //    // Only add the book if it doesn't already exist
// //    if (!bookExists) {
// //     likedBooks.push(book);

// //     // Save the updated likedBooks array back to localStorage
// //     localStorage.setItem('likedBooks', JSON.stringify(likedBooks)); //updating local storage with updated array of likedbook
// // } 
// // }

// //        <button onClick={addToLikedBooks}>{isLiked ? 'Unlike' : 'Like'} <GrFavorite /></button>