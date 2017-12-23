import React from "react";
import "./FormBtn.css";
import { Link } from "react-router-dom";

//Need to ask TA, why button does not submit to mongo with props and children present
export const FormBtn = props =>
  <Link to="/articles">
	  <button {...props} className="button button2">
	    {props.title}
	  </button>
</Link>
  ;
