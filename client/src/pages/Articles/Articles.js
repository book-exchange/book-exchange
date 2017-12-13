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
import Nav from "../../components/Nav";

class Articles extends Component {
  state = {
    articles: [],
    saved:[]
  }

  componentWillMount() {
    this.scrapeArticles();
  }

  // componentDidMount() {
  //   this.loadarticles();
  //   this.loadsavedarticles();
  // }

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

  render() {
    return (
      <Container fluid>
        <Nav/>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>BJJ News Articles</h1>
              <LoadBtn onClick={() => this.loadarticles()} />
            </Jumbotron>
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
            <Jumbotron>
              <h1>Saved Articles</h1>
              <LoadBtn onClick={() => this.loadsavedarticles()} />
            </Jumbotron>
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
