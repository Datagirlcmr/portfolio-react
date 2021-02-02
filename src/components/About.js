import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const About = () => {
  return (
    <div className="about-cont" id="about">
      <Fade top>
        <div className="section-intro">
          <h1>ABOUT</h1>
        </div>
      </Fade>
      <div className="about">
        <div className="about-me">
          <div className="pic-cont">
            <Fade bottom>
              <div className="picture"></div>
            </Fade>
          </div>
          <Slide left>
            <p>
            I am an Award-winning full-stack web developer (& M.B.A.) 
            with an accountant’s eye, an administrator’s voice, and a developer’s mind. 
            A get-it-done and get-it-done-well kind of woman. I am even more passionate in training and mentoring
            girls in/into tech. Feel free to{" "}
              <a href="#contacts">connect with me</a>.
              <br />
              <a href="https://docs.google.com/document/d/1T-oj7EtC7HGLT8s2nXODzL9TPZ2CxEhrtr85xL-uoDU/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
                <button className="resume">Check out my resume</button>
              </a>
            </p>
          </Slide>
        </div>
        <Slide right>
          <div className="skills">
            <i class="devicon-rails-plain-wordmark"></i>
            <i class="devicon-react-original-wordmark"></i>
            <i class="devicon-ruby-plain-wordmark"></i>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-css3-plain-wordmark"></i>
            <i class="devicon-postgresql-plain-wordmark"></i>
            <i class="devicon-mysql-plain-wordmark"></i>
            <i class="devicon-github-plain-wordmark"></i>
            <i class="devicon-bootstrap-plain-wordmark"></i>
            <i class="devicon-sass-original"></i>
            <i class="devicon-webpack-plain-wordmark"></i>
            <i class="devicon-wordpress-plain-wordmark"></i>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;