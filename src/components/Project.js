import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const Project = () => {
  return (
    <div className="project-cont" id="projects">
      <Fade top>
        <div className="section-intro">
          <h1>PROJECTS</h1>
        </div>
      </Fade>
      <div className="projects">
        <div className="project shadow">
          <Slide left>
            <div className="project-img">
              <div className="img"></div>
            </div>
          </Slide>
          <Slide right>
            <div className="project-des">
              <p className="des">
                <span>Steps App</span>
                This is a single page application. 
                The app provides a platform where users can track their steps simply by inputting the steps taken each day.
              </p>
              <p className="skills">
                <span>JavaScript</span>
                <span>Ruby</span>
                <span>React</span>
                <span>Rails</span>
                <span>PostgreSQL</span>
                <span>JWT</span>
              </p>
              <p className="links">
                <a
                  className="shadow"
                  href="https://steps-tracker.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo{" "}
                  <i class="fa fa-external-link-alt" aria-hidden="true"></i>
                </a>
                <a
                  className="shadow"
                  href="https://github.com/Datagirlcmr/steps-tracker"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Source <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </Slide>
        </div>

        <div className="project shadow">
          <Slide left>
            <div className="project-img">
              <div className="img"></div>
            </div>
          </Slide>
          <Slide right>
            <div className="project-des">
              <p className="des">
                <span>Dogs-Catalog</span>This project is a React App that
                fetches the data from the dog API and allows anyone to browse
                different breeds of dogs and get the images for each breed.
              </p>
              <p className="skills">
                <span>JavaScript</span>
                <span>React</span>
                <span>HTML</span>
                <span>Bootstrap</span>
              </p>
              <p className="links">
                <a
                  className="shadow"
                  href="https://dogstorebreed.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo{" "}
                  <i class="fa fa-external-link-alt" aria-hidden="true"></i>
                </a>
                <a
                  className="shadow"
                  href="https://github.com/Datagirlcmr/dogstore"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Source <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </Slide>
        </div>

        <div className="project shadow">
          <Slide left>
            <div className="project-img">
              <div className="img"></div>
            </div>
          </Slide>
          <Slide right>
            <div className="project-des">
              <p className="des">
                <span>Microverse Website</span> A website for Microverse. A remote school for software developers. 
                The requirements were to build a grid based framework, then use the framework to build a web application. 
                This is a static page, meant to show off a combination of web design and responsiveness.
              </p>
              <p className="skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>Bootstrap</span>
              </p>
              <p className="links">
              <a
                  className="shadow"
                  href="https://rawcdn.githack.com/Datagirlcmr/Grid-Based-Framework/fc3b8b29238caae65c455421945806fafeeb0f03/index.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo{" "}
                  <i class="fa fa-external-link-alt" aria-hidden="true"></i>
                </a>
                <a
                  className="shadow"
                  href="https://github.com/Datagirlcmr/Grid-Based-Framework"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Source <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </Slide>
        </div>

        <div className="project shadow">
          <Slide left>
            <div className="project-img">
              <div className="img"></div>
            </div>
          </Slide>
          <Slide right>
            <div className="project-des">
              <p className="des">
                <span>Weather-App</span>
                This project is a responsive Weather application that pulls the
                data from the OpenWeatherMap API allowing users to search and
                view the forecast in cities worldwide. The app allows users to
                convert the temperature in Celcius or Kelvin.
              </p>
              <p className="skills">
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </p>
              <p className="links">
                <a
                  className="shadow"
                  href="https://raw.githack.com/Datagirlcmr/Weather-App/feature/dist/index.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo{" "}
                  <i class="fa fa-external-link-alt" aria-hidden="true"></i>
                </a>
                <a
                  className="shadow"
                  href="https://github.com/Datagirlcmr/Weather-App"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Source <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Project;