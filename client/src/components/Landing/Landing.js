import React from "react";
import "./Landing.css";
import Logo from '../Logo/Logo';
import { Col, Row, Container } from "../Grid";
import  Card from "../Card";
// import Jumbotron from "../Jumbotron";


const h1Style = {
	fontSize: '5vh',
};


const Landing = () => (
<Container>
	<Row>
		<Col size="xs-12">
				<Logo style='landingLogo'/>
				<div className="wrapper">
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
				<h1 style={h1Style}>Step 1: Join Now or Login</h1>
			</Card>
		</Col>
		<Col size="xs-4">
			<Card>
				<h1 style={h1Style}>Step 2: Find Open Mats</h1>
			</Card>
		</Col>
		<Col size="xs-4">
			<Card>
				<h1 style={h1Style}>Step 3: Attend Open Mats</h1>
			</Card>
		</Col>
	</Row>
</Container>
);
export default Landing;
