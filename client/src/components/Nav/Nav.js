import React from "react";
import "./Nav.css";
import Logo from '../Logo/Logo';





const Nav = (props) => (
<nav>
  <div className="row">
    <div className="quarter">
        <a href="/"><Logo/></a>
    </div>
    <div className="rest">
      <i className="fa fa-bars"></i>
      <div className="text-menu">
        <div>
          <a href="/JoinNow"className="menuOption">{props.link1}</a>
        </div>
        <span className="slash">/</span>

        <div>
          <a href="/AboutUS" className = "menuOption">{props.link2}</a>
          <ul>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/FAQs">FAQs</a></li>
          </ul>
        </div>

        <span className="slash">/</span>

        <div>
          <a href="/Login" className = "menuOption">{props.link3}</a>
        </div>
      </div>
    </div>
  </div>
</nav>
);
export default Nav;
