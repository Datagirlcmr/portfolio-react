import React from "react";
import Fade from "react-reveal/Fade";

const Article = () => {
  return (
    <div className="article-cont" id="articles">
      <Fade top>
        <div className="section-intro">
          <h1>ARTICLES</h1>
        </div>
      </Fade>
      <Fade bottom>
      <div className="articles">
        <a
          href="https://hackernoon.com/understanding-boolean-methods-in-ruby-with-examples-363n36nu"
          rel="noopener noreferrer"
          target="_blank"
          className="article"
        >
          Understanding Boolean Methods in Ruby With Examples
        </a>
        <a
          href="https://hackernoon.com/the-amazing-react-router-xf133uek"
          rel="noopener noreferrer"
          target="_blank"
          className="article"
        >
          The Amazing React Router
        </a>

        <a
          href="https://hackernoon.com/one-month-at-microverse-je5d37k1"
          rel="noopener noreferrer"
          target="_blank"
          className="article"
        >
          My One Month Experience as a Developer
        </a>
      </div>
      </Fade>
    </div>
  );
};

export default Article;