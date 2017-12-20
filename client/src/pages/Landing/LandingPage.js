import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import SaveBtn from "../../components/SaveBtn";
// import LoadBtn from "../../components/LoadBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import  Nav from "../../components/Nav";
import  Landing from "../../components/Landing";
import  Footer from "../../components/Footer";

class LandingPage extends Component {


  render() {
    return (
      <Container fluid>
      	<Nav />
      	<Row>
      	<Col size="md-6">
		  <Landing/>
		</Col>
	    </Row>
	    <Footer/>
      </Container>
    );
  }
}

export default LandingPage;
