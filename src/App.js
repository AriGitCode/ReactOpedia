import React from 'react';
// import {Link, Route, Routes, Navigate} from "react-router-dom";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Navbar from './components/Navbar';
// import Home from './components/Home';
import About from './components/About';
import BookShelf from './components/BookShelf';
import BookDetails from './components/BookDetails';
// import SignUp from './components/pages/Signup';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';
import '../src/App.css'
import Home from './components/Home';


export default function App() {


  return (
     
      <Router>
          <Navbar />
          
           
          <Routes>
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/home" element={<Home/>} />
              <Route path="/about" element={<About />} />
              <Route path="/bookdetails/:bookID" element={<BookDetails />} />
              {/* <Route path="/sign-up" element={<SignUp />}/> */}
          </Routes>
          <Footer/>
      </Router>
  
  );
}

// function App() {
//   return (
//     <>
//     <nav>
//       <Navbar/>
//     </nav>
//     <main>
//       <Header/>
//     </main>
//       <Routes>
//             <Route path="/home" element={ <Home/> } />
//             <Route path="/about" element={ <About/> } />
//             <Route path="/book" element={ <Book/> } />
//             <Route path="/bookDetails" element={ <BookDetails/> } />
//             {/* <Route path="*" element={ <Navigate to="/home" />} />  */}
//       </Routes> 
//     </>
//   );
// }


