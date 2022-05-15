import React from "react";
import "./Footer.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Icons />
      <p className="copyright-text">
        © 2022 Thrinath Ravula. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

export const Icons = () => {
  return (
    <div className="wrapper">
      <a
        className="icon facebook"
        href="https://www.facebook.com/tri.nath.96930"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
      <a
        className="icon twitter"
        href="https://twitter.com/Trinath_3?t=pJUCo9Vvt3qvHLgPRe1Uig&s=08"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        className="icon instagram"
        href="https://instagram.com/3_n_a_t_h?utm_medium=copy_link"
        target="_blank"
        rel="noreferrer"
      >
        <RiInstagramFill />
      </a>
      <a
        className="icon github"
        href="https://github.com/RavulaThrinath"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="icon youtube"
        href="https://www.linkedin.com/in/ravula-thrinath-42a3491b7"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};
