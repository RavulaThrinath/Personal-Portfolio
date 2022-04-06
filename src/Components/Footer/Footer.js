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
        <a
          href="https://www.facebook.com/tri.nath.96930"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://instagram.com/3_n_a_t_h?utm_medium=copy_link"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://twitter.com/Trinath_3?t=pJUCo9Vvt3qvHLgPRe1Uig&s=08"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterSquare />
        </a>
        <a
          href="https://www.facebook.com/tri.nath.96930"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <p className="copyright-text"> Thrinath Ravula © 2022 </p>
    </footer>
  );
};

export default Footer;
