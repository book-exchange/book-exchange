import React from "react";
import "./LoadBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => (
  <button className="btn btn-primary load-btn" {...props}>
    Load
  </button>
);

export default SaveBtn;
