import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBookBookmark } from "react-icons/fa6";
import './Navbar.css'
import { ImMenu3 } from "react-icons/im";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const hanleNavbar = () => setToggleMenu(!setToggleMenu);


	return (
	
        <nav>
         
				<button type="button" className="navbar-tog-btn" onClick={hanleNavbar}><ImMenu3 size={35} style={{color:`${toggleMenu ? "#fff" : "#010101"}`}} /></button>
				<div className={toggleMenu ? "navbar-collapse show-navbar" : "navbar-collapse"}>
						<ul className="navbar-nav">
						<li className="nav-item">
							<FaBookBookmark className="nav--icon"/>
							<Link className="nav-pages" id="logo" to="/home" > ReactOpedia</Link>
							<Link className="nav-pages" to="/about" > About</Link>
							
							{/* <Link className="nav-pages" to="/sign-up" activeStyle>Sign Up</Link> */}
						</li>
						</ul>
				</div>
        </nav>
	);
};

export default Navbar;


