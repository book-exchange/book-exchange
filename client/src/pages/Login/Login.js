import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import SaveBtn from "../../components/SaveBtn";
// import LoadBtn from "../../components/LoadBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import  Nav from "../../components/Nav";
import  Footer from "../../components/Footer";
import  Card from "../../components/Card";

class Login extends Component {
  state = {
    email: "",
    password: ""
  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.savearticle({
        email: this.state.email,
        password: this.state.password,
        city: this.state.city
      })
        .then(res => this.loadarticles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Nav link1="Join Now" link2="About Us" link3="Login"/>
        <Row>
          <Col size="md-4"/>
          <Col size="md-4">
            <Card>
              <Jumbotron>
                <h1>Login</h1>
              </Jumbotron>
              <form>
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="E-mail"
                />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password"
                />
                <FormBtn
                  disabled={!(this.state.author && this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Create Account
                </FormBtn>
              </form>
            </Card>
          </Col>
          <Col size="md-4"/>
        </Row>

      </Container>
    );
  }
}

export default Login;
