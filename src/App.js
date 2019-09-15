import React, { Component } from "react";

import "./App.css";
import "./assets/fonts/fontawesome.css";
import "./assets/fonts/fa-brands.css";
import "./assets/fonts/fa-regular.css";

import styled from "styled-components";
import namePng from "./assets/images/name.png";

// import firebase from 'firebase';

const Section1 = styled.div`
  position: relative;
  background-image: url(${namePng}), linear-gradient(to bottom, white 50%, black 50%);
  background-size: 200px auto,100% 100%;
  background-position: top calc(50% - 40px) left 15%,top left;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  z-index: 1;

  .clone-top {
    width: 100%;
    height: 50vh;
    overflow: hidden;
    position: fixed;
    z-index: 1;
  }

  .clone-top-inner {
    position: relative;
    height: calc(100vh + 173px);

    a {
      color: black;
      border-color: black;
    }
  }
`;

const SocialMedias = styled.div`
  position: absolute;
  top: 50vh;
  right: -10px;
  padding: 30px 10%;
  height: 113px;

  a {
    display: inline-block;
    text-align: center;
    font-size: 30px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    color: white;
    border: 2px solid white;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Section2 = styled.div`
  position: relative;
  height: 100vh;
  z-index: 2;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', (e) => {
      document.querySelector('.clone-top').scrollTop = document.documentElement.scrollTop;
    });
  }

  render() {
    return (
      // 文字 Blog 影音 dance band kyudo 音樂 sing kyudo chado wafuku 程式
      <div>
        <Section1>
          <div className="clone-top">
            <div className="clone-top-inner">
              <SocialMedias>
                <a
                  href="https://www.linkedin.com/in/l443018/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fab fa-linkedin-in"
                ></a>
                <a
                  href="https://www.facebook.com/l443018/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fab fa-facebook-f"
                ></a>
              </SocialMedias>
            </div>
          </div>
          <SocialMedias>
            <a
              href="https://www.linkedin.com/in/l443018/"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-linkedin-in"
            ></a>
            <a
              href="https://www.facebook.com/l443018/"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-facebook-f"
            ></a>
          </SocialMedias>
        </Section1>
        <Section2>
          test
        </Section2>
      </div>
    );
  }
}

export default App;
