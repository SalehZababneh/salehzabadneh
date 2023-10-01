import React from "react";
import "./workcontainer.css";
const WorkContainer = ({
  children,
  height,
  width,
  backgroundColor,
  textColor,
  margin,
  padding,
  borderRadius,
  className,
}) => {
  const containerStyle = {
    height: height || "auto",
    width: width || "auto",
    backgroundColor: backgroundColor || "transparent",
    color: textColor || "inherit",
    border: " none" || "none",
    borderRadius: borderRadius || "16px",
    padding: padding || "16px",
    margin: margin || "0px",
  };

  return (
    <div
      style={containerStyle}
      className={` ${className} responsive-container `}
    >
      {children}
    </div>
  );
};

export default WorkContainer;
