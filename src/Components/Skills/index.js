import React from "react";
import "./style.css";





function Skills() {
  return (
<div id="aboutBg">
      <section id="about" data-magellan-target="about">
        <div class="portfolio-resume row">
          <div class="large-4 columns">
            <div class="portfolio-resume-wrapper">
              <img class="portfolio-resume-headshot" src="./Data/images/me.jpg.JPG" width="50px" height="50px" alt="headshot">
              <h3 class="portfolio-resume-header">Skills</h3>
              <ul>
                <li>Front end web developement</li>
                <li>Html & CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Bootstrap & Foundation</li>
                <li>Node.js</li>
                <li>SQL & MongoDB</li>
              </ul>
        
          <div class="large-4 columns">
            <div class="portfolio-resume-wrapper">
              <h3 class="portfolio-resume-header">Experience</h3>
              <div class="portfolio-resume-spacing">
                <h5><strong>SportSight Training</strong></h5>
                <p>I am the Social Media and Technology Developer</p>
                <ul>
                  <li>Work with technology machines to help improve athletes reaction and vision. </li>
                  <li>Edit and create videos for our social media sites. Also maintain our social media sites.</li>
                  <li>Pull data from csv files and connect/map them to excel spreadsheets and make our client and user data more consumer friendly</li>
                </ul>
              </div>
            </div>
          </div>
        </img>
      </div>
  )
}

export default Skills;