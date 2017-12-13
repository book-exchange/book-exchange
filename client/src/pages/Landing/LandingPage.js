import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import LoadBtn from "../../components/LoadBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import  Nav from "../../components/Nav";
import  Landing from "../../components/Landing";

class LandingPage extends Component {


  render() {
    return (
      <Container fluid>
        <Nav/>
        <Landing/>
      </Container>
    );
  }
}

export default LandingPage;
