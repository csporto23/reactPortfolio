import React from "react";
import "./style.css";



function SocialSideBar() {
  return (
<ul class="sticky-social-bar">
    <li class="social-icon">
      <a href="https://www.facebook.com/colton.porto"> 
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <span class="social-icon-text">Facebook</span>
      </a>
    </li>
    <li class="social-icon">
      <a href="https://github.com/csporto23">
        <i class="fa fa-github" aria-hidden="true"></i>
        <span class="social-icon-text">Github</span>
      </a>
    </li>
    <li class="social-icon">
      <a href="#">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
        <span class="social-icon-text">Linkedin</span>
      </a>
    </li>
    <li class="social-icon">
      <a href="https://www.instagram.com/csporto/">
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <span class="social-icon-text">Instagram</span>
      </a>
    </li>
  </ul>
  )
}

export default SocialSideBar;