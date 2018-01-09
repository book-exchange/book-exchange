import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import LoadBtn from "../../components/LoadBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";
import  Card from "../../components/Card";
import Modal from 'react-modal';


// const h1Style = {
//   fontSize: '3vh',
// };

const h1Style2 = {
  fontSize: '5vh',
};

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    overflowY: "scroll",
    padding: "2%"
  }
};


class Articles extends Component {
  constructor() {
    super();

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  state = {
    articles: [],
    saved:[],
    modalIsOpen: false,
    instructorFirstName: "",
    instructorLastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    totalMembers: "",
    typeOfGym: "",
    date: "",
    time:"",
    user:""
  }

  componentWillMount() {
    this.scrapeArticles();
  }

  // componentDidMount() {
  //   this.loadarticles();
  //   this.loadsavedarticles();
  // }

  saveNewEvent = (instructorFirstName, instructorLastName, street, city, state, zip, email, totalMembers, typeOfGym, date, time) => {
      API.saveevent({
        //this save article should be changes to save user, new model needs created
        instructorFirstName: this.state. instructorFirstName,
        instructorLastName: this.state.instructorLastName,
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        email: this.state.email,
        totalMembers: this.state.totalMembers,
        typeOfGym: this.state.typeOfGym,
        date: this.state.date,
        time: this.state.time
      })
        .then(this.closeModal())
        .catch(err => console.log(err));
  }


  loadarticles = () => {
    API.getarticles()
      .then(res =>
        this.setState({ articles: res.data },  
        function () {
        console.log(this.state);
        })
      )
      .catch(err => console.log(err));
  }
//stuff i added
  loadusers = () => {
    API.getuser()
      .then(res =>
        this.setState({ user: res.data },  
        function () {
        console.log(this.state);
        })
      )
      .catch(err => console.log(err));
  }

  loadsavedarticles = () => {
    API.getSavedarticles()
      .then(res =>
        this.setState({ saved: res.data },  
        function () {
        console.log(this.state);
        })
      )
      .catch(err =>console.log(err));

  }

  deletearticle = id => {
    API.deletearticle(id)
      .then(res => this.loadarticles())
      .catch(err => console.log(err));
  }

  savearticle = (id, title, link, info, img) => {
    API.savearticle({
      title: title,
      link: link,
      info: info,
      id: id,
      img: img
    })
      .then(res => this.loadsavedarticles())
      .catch(err => console.log(err));

  }

  scrapeArticles = () => {
    API.scrapeArticles()
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.savearticle({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadarticles())
        .catch(err => console.log(err));
    }
  };
//more stuff i added
  let token = sessionStorage.getItem("token");

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
    this.subtitle.style.textAlign = "center";
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }



  render() {
    return (
      <Container fluid>
        <Nav link1="Join Now" link2="About Us" link3="Login"/>
        <Row>
          <Col size="xs-8">
            <Card>
              <h1 style={h1Style2}>Open Mats in your Area</h1>
              {this.state.articles.length ? (
              <List>
                <ListItem>
                </ListItem>
              </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="xs-4">
            <Card>
              <h1 style={h1Style2}>Own A Gym?</h1>
              <FormBtn title="Host an Open Mat" onClick={this.openModal}/>
              <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Host Open Mat Modal"
              >
                <button onClick={this.closeModal}>X Close</button>
                <h2 ref={subtitle => this.subtitle = subtitle}>Host and Open Mat</h2>
                <div>
                  <h3>Enter Gym Info Below:</h3>
                </div>
                <form>
                  <Col size="xs-6">
                    <Input
                      value={this.state.instructorFirstName}
                      onChange={this.handleInputChange}
                      name="instructorFirstName"
                      placeholder="Instructor First Name"
                    />
                    <Input
                      value={this.state.instructorLastName}
                      onChange={this.handleInputChange}
                      name="instructorLastName"
                      placeholder="Instructor Last Name"
                    />
                    <Input
                      value={this.state.street}
                      onChange={this.handleInputChange}
                      name="street"
                      placeholder="Street"
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
                  </Col>
                  <Col size ="xs-6">
                    <Input
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      name="email"
                      placeholder="E-Mail"
                      type="email"
                    />
                    <div>Enter the total amount of students at your gym:</div>
                    <Input
                      value={this.state.totalMembers}
                      onChange={this.handleInputChange}
                      name="totalMembers"
                      placeholder="Total Members (Enter Number)"
                      type="number"
                    />
                    <Input
                      value={this.state.typeOfGym}
                      onChange={this.handleInputChange}
                      name="typeOfGym"
                      placeholder="Gym Type"
                    />
                    <Input
                      value={this.state.date}
                      onChange={this.handleInputChange}
                      name="date"
                      placeholder="Open Mat Date"
                      type="date"
                    />
                    <Input
                      value={this.state.time}
                      onChange={this.handleInputChange}
                      name="time"
                      placeholder="Open Mat Time"
                      type="time"
                    />
                  </Col>
                  <FormBtn onClick={() => this.saveNewEvent(this.state.instuctorFirstName, this.state.instructorLastName, this.state.street, this.state.city, this.state.state, this.state.zip, this.state.email, this.state.totalMembers, this.state.typeOfGym, this.state.date, this.state.time)} title="Submit"/>
                </form>
              </Modal>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Card>
              <h1>BJJ News Articles</h1>
              <LoadBtn onClick={() => this.loadarticles()} />
            </Card>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <DeleteBtn onClick={() => this.deletearticle(article._id)} />
                    <SaveBtn onClick={() => this.savearticle(article._id, article.title, article.link, article.info, article.img)}/>
                    <a href={article.link}>
                      <strong>
                        {article.title}
                      </strong>
                      <img alt="articleimg" className="img-responsive center-block" src={article.img}/>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        
          <Col size="md-6">
            <Card>
              <h1>Saved Articles</h1>
              <LoadBtn onClick={() => this.loadsavedarticles()} />
            </Card>
            {this.state.saved.length ? (
              <List>
                {this.state.saved.map(article => (
                  <ListItem key={article._id}>
                    <a href={article.link}>
                      <strong>
                        {article.title}
                      </strong>
                      <img alt="other" className="img-responsive center-block" src={article.img}/>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
