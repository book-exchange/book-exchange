import React from "react";

export const Select = props =>
  <div className="form-group">
  	<label for={this.props.label}>{this.props.label}</label>
    <select className="form-control" >
    	<option>{this.props.firstoption}</option>
    	<option>{this.props.secondoption}</option>
    	<option>{this.props.thirdoption}</option>
    	<option>{this.props.fourthoption}</option>
    </select>
  </div>;
