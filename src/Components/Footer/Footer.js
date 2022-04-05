import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <a href="./">
          <AiFillFacebook />
        </a>
        <a href="./">
          <AiFillInstagram />
        </a>
        <a href="./">
          <AiFillTwitterSquare />
        </a>
        <a href="./">
          <AiFillLinkedin />
        </a>
      </div>
      <p className="copyright-text"> Thrinath Ravula © 2022 </p>
    </footer>
  );
};

export default Footer;
