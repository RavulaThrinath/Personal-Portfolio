import React from "react";
import "./Preloader.css";

const Preloader = (props) => {
  return (
    <div className="loader" id={props.load ? "preloader" : "preloader-none"}>
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </div>
  );
};

export default Preloader;
