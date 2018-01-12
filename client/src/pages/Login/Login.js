import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import SaveBtn from "../../components/SaveBtn";
// import LoadBtn from "../../components/LoadBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input } from "../../components/Form";
import  Nav from "../../components/Nav";
// import  Footer from "../../components/Footer";
import  Card from "../../components/Card";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: ""
  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  setStateErrorMessage = (message) => {
        this.setState({
            errorMessage: message
        });
  }

  checkEmail = () => {

  }

  login = (email, password) =>
  {
    const data = 
    {
      "email":this.state.email,
      "password":this.state.password
    }

    const This = this;

    API.login(data).then(function(result)
    {
      console.log("this should be data" + result.data)

      if(!result.data[0]){
        console.log("hello");
        This.setStateErrorMessage('E-mail does not')
      }
      else if(result.data[0].password === data.password)
      {
        console.log(result.data);
        sessionStorage.setItem('token', result.data.email);
        window.location='/articles'
      }
      else if(result.data[0].password !== data.password)
      {
        This.setStateErrorMessage('Wrong Password')
        console.log(result.data + "Failed");
      }
    })
  }

  render() {
    return (
      <Container fluid>
        <Nav link1="Join Now" link2="About Us" link3="Login"/>
        <Row>
          <Col size="md-4"/>
          <Col size="md-4">
            <Card>
              <h1>Login</h1>
              <h4>{this.state.errorMessage}</h4>
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
                  type="password"
                />
                <a
                  disabled={!(this.state.email && this.state.password)}
                  onClick={() => this.login(this.state.email, this.state.password)}
                  title="Login"
                >Login</a>
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
