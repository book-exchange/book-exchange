import React from "react";
import "./Nav.css";
import Logo from '../Logo/Logo';


class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

render(){
  return (
    <nav>
      <div className="row">
        <div className="quarter">
            <a href="/"><Logo/></a>
        </div>
        <div className="rest">
          <i onClick={this.handleClick} className="fa fa-bars"></i>
          <div className={this.state.isToggleOn ? "text-menu" : "menu-appear"}>
            <div>
              <a href="/JoinNow"className="menuOption">{this.props.link1}</a>
            </div>
            <span className="slash">/</span>

            <div>
              <a href="/AboutUS" className="menuOption">{this.props.link2}</a>
              <ul>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/FAQs">FAQs</a></li>
              </ul>
            </div>

            <span className="slash">/</span>

            <div>
              <a href="/Login" className = "menuOption">{this.props.link3}</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    );

};


};
export default Nav;
