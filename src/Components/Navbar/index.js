import React from "react";
import "./style.css";



function Navbar() {
  return (
    <div data-sticky-container>
    <div class="top-bar mb-0" data-sticky data-margin-top="0" id="example-menu">
        <div class="container">
      <ul class="menu menu-hover-lines" id="menu-hover" data-sticky data-magellan>
        <li class="active"><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
    </div>
  </div>
  </div>
  )
}

export default Navbar;