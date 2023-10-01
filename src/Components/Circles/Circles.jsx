import React from "react";
import "./circles.css";
const Circles = () => {
  return (
    <>
      <span className="circle top-left"></span>
      <span className="circle top-right"></span>
      <span className="circle bottom-left"></span>
      <span className="circle bottom-right"></span>
      <span className="line top-right-to-bottom-right"></span>
      <span className="line top-left-to-bottom-left"></span>
      <span className="line top-right-to-top-left"></span>
      <span className="line bottom-left-to-bottom-right"></span>
    </>
  );
};

export default Circles;
