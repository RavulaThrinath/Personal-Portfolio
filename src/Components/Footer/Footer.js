import React from "react";
import "./Footer.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* <div className="footer-icons">
        <a
          href="https://www.facebook.com/tri.nath.96930"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
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
      </div> */}
      <Icons />
      <p className="copyright-text"> © 2022  Thrinath Ravula. All Rights Reserved </p>
    </footer>
  );
};

export default Footer;

export const Icons = () => {
  return (
    <ul class="wrapper">
      <li class="icon facebook">
        <span>
          <FaFacebookF />
        </span>
      </li>
      <li class="icon twitter">
        <span>
          <FaTwitter />
        </span>
      </li>
      <li class="icon instagram">
        <span>
          <RiInstagramFill />
        </span>
      </li>
      <li class="icon github">
        <span>
          <FaGithub />
        </span>
      </li>
      <li class="icon youtube">
        <span>
          <FaLinkedinIn />
        </span>
      </li>
    </ul>
  );
};
