import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBookBookmark } from "react-icons/fa6";
import { ImMenu3 } from "react-icons/im";


const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const handleNavbar = () => setToggleMenu(!setToggleMenu);
     
	return (
		<nav className="navbar">
		  <div className="logo-container">
			<FaBookBookmark className="nav-icon" />
			<Link className="logo" to="/home">
			  ReactOpedia
			</Link>
		  </div>
		  <button><ImMenu3
			className="navbar-toggle"
			size={35}
			onClick={handleNavbar}
			style={{ color: toggleMenu ? '#fff' : '#010101' }}
		  /></button>
		  <div className={`navbar-links ${toggleMenu ? 'show-navbar' : ''}`}>
			<ul>
			  <li>
				<Link to="/about">About</Link>
			  </li>
			  <li>
				<Link to="/favourites">Highlights</Link>
			  </li>
			</ul>
		  </div>
		</nav>
	  );
	};
	

export default Navbar;


