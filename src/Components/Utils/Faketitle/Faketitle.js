import React from "react";
import "./Faketitle.css";

const Faketitle = ({ fakeTitle }) => {
  return (
    <div className="fake-title-parent">
      <h1 className="fake-title">{fakeTitle}</h1>
    </div>
  );
};

export default Faketitle;
