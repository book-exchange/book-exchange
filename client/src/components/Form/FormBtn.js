import React from "react";
import "./FormBtn.css";
import { Link } from "react-router-dom";


export const FormBtn = ({ children, props }) =>
  <Link to="/articles">
	  <button {...props} className="button button2">
	    {children}
	  </button>
</Link>
  ;
