import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Navbar from './components/Navbar';
// import Home from './components/Home';
import About from './components/About';
// import Features from './components/Features';
import BookDetails from './components/BookDetails';
import Highlights from './components/Highlights';
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
              <Route path="/favourites" element={<Highlights />}/> 
          </Routes>
       
          <Footer/>
      </Router>
  
  );
}




