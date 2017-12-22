import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import SaveBtn from "../../components/SaveBtn";
// import LoadBtn from "../../components/LoadBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import  Nav from "../../components/Nav";
import  Footer from "../../components/Footer";
import  Card from "../../components/Card";

class JoinNow extends Component {
  state = {
    firstname: "",
    lastname: "",
    city: "",
    state: "",
    zip: "",
    belt: "",
    email: "",
    password: ""

  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  saveNewUser = (firstname, lastname, city, state, zip, belt, email, password) => {
      API.saveuser({
        //this save article should be changes to save user, new model needs created
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        belt: this.state.belt,
        email: this.state.email,
        password: this.state.password
      })
        .then(<Link to="/articles"/>)
        .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Nav link1="Join Now" link2="About Us" link3="Login"/>
        <Row>
          <Col size="md-4"/>
          <Col size="md-4">
            <Card>
              <h1>Join Now</h1>
              <form>
                <Input
                  value={this.state.firstname}
                  onChange={this.handleInputChange}
                  name="firstname"
                  placeholder="First Name"
                />
                <Input
                  value={this.state.lastname}
                  onChange={this.handleInputChange}
                  name="lastname"
                  placeholder="Last Name"
                />
                <Input
                  value={this.state.city}
                  onChange={this.handleInputChange}
                  name="city"
                  placeholder="City"
                />
                <Input
                  value={this.state.state}
                  onChange={this.handleInputChange}
                  name="state"
                  placeholder="State"
                />
                <Input
                  value={this.state.zip}
                  onChange={this.handleInputChange}
                  name="zip"
                  placeholder="Zip Code"
                />
                <Input
                  value={this.state.belt}
                  onChange={this.handleInputChange}
                  name="belt"
                  placeholder="Belt"
                  //make drop down or radio
                />
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="E-Mail"
                  type="email"
                />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <FormBtn
                  // disabled={!(this.state.firstname && this.state.lastname && this.state.city)}
                  onClick={() => this.saveNewUser(this.state.firstname, this.state.lastname, this.state.city, this.state.state, this.state.zip, this.state.belt, this.state.email, this.state.password)}
                  // to="/articles"     
                />
              </form>
            </Card>
          </Col>
          <Col size="md-4"/>
        </Row>
      </Container>
    );
  }
}

export default JoinNow;
