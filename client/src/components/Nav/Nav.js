import React from "react";
import "./Nav.css";
import Logo from '../Logo/Logo';





const Nav = () => (
<nav>
  <div className="row">
    <div className="quarter">
        <a href="/"><Logo/></a>
    </div>
    <div className="rest">
      <i className="fa fa-bars"></i>
      <div className="text-menu">
        <div>
          <a href="/"className="menuOption">Join Now</a>
        </div>
        <span className="slash">/</span>

        <div>
          <a href="/AboutUS" className = "menuOption">About Us</a>
          <ul>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/FAQs">FAQs</a></li>
          </ul>
        </div>

        <span className="slash">/</span>

        <div>
          <a href="/Login" className = "menuOption">Login</a>
        </div>
      </div>
    </div>
  </div>
</nav>
);
export default Nav;
