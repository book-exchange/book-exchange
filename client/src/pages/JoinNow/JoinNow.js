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

class JoinNow extends Component {
  state = {
    firstname: "",
    lastname: "",
    city: ""
  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstname && this.state.lastname && this.state.city) {
      API.savearticle({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        city: this.state.city
      })
        .then(res => this.loadarticles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Nav/>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Join Now</h1>
            </Jumbotron>
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
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Create Account
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default JoinNow;
