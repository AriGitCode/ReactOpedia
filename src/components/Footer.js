import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer(){
    return (
       <footer className="footer">
          <small>© 2023 Ari development. All rights reserved.</small>
       <div className="social-icons">
        <a href="link-to-instagram-profile">
          <BsInstagram />
        </a>
        <a href="link-to-twitter-profile">
        <FaXTwitter />
        </a>
        <a href="link-to-facebook-profile">
        <FaFacebookF />
        </a>
      </div>
        </footer>
    )
}