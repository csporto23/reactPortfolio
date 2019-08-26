import React from "react";
import "./style.css";
import SocialSideBar from "../SocialSideBar/index"





function FrontPage() {
  return (
<div class="hero-full-screen">

<div id="home" class="top-content-section">
</div>
<SocialSideBar />
<div class="middle-content-section">
  <h1 id="homeTitle">Fullstack Software Developer</h1>
  <button id="projectButton" class="button large" href="#projects">Projects</button>
  <button id="aboutButton" class="button large"  href="#about">About</button>
</div>

<div class="bottom-content-section" data-magellan data-threshold="0">
</div>

<div id="main-content-section" data-magellan-target="main-content-section">
</div>
</div>
  )
}

export default FrontPage;