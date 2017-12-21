import React from "react";
import "./Landing.css";
// import Logo from '../Logo/Logo';
import { Col, Row, Container } from "../Grid";
import  Card from "../Card";
import Jumbotron from "../Jumbotron";

const Landing = () => (
<Container>
	<Row>
		<Col size="xs-12">
				<div className="styles wrapper">
  					<div className="column cat1">
    					<div className="info">
      						<h2>Open Mats Await</h2>
      						<p>(Don't Be Scared)</p>
      						<a className="crumb" href="/joinnow">Join Now</a>
    					</div>
  					</div>
	  				<div className="column cat2">
	    				<div className="info">
	      					<h2>Welcome Back</h2>
	      					<p>(We Missed You!)</p>
	      					<a className="crumb" href="/login">Login</a>
    					</div>
  					</div>
				</div>
		</Col>
	</Row>
	<Row>
		<Col size="xs-4">
			<Card>
				<h2>Step 1: Sign Up</h2>
			</Card>
		</Col>
		<Col size="xs-4">
			<Card>
				<Jumbotron>
	                <h1>Step 2: Attend</h1>
	             </Jumbotron>
			</Card>
		</Col>
		<Col size="xs-4">
			<Card>
				<Jumbotron>
	                <h1>Step 3: Go Roll</h1>
	             </Jumbotron>
			</Card>
		</Col>
	</Row>
</Container>
);
export default Landing;
