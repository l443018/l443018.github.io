import React, { Component } from "react";

import "./App.css";
import "./assets/font/fontawesome.css";
import "./assets/font/fa-brands.css";
import "./assets/font/fa-regular.css";

// import Header from "./header/header";
// import About from "./about/about";
import Links from "./links/links";
import Menu from "./menu/menu";

import { ThemeProvider } from "styled-components";
import styled from "styled-components";

// import firebase from 'firebase';

const AppWrapper = styled.div``;

const Title = styled.div`
  display: inline-block;
  height: 100vh;
  padding: 8vw;

  > div {
    display: inline-block;
    vertical-align: middle;
  }

  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: 0;
  }

  .name {
    color: ${props => props.theme.isMobile ? 'black' : 'white'};
    font-size: 100px;
    line-height: 1.1;
  }

  .link {
    color: black;
    background-color: white;
    padding: 10px;
    cursor: pointer;
    font-size: 25px;
    border-radius: 50%;
    margin-right: 10px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const TitleBg = styled.div`
  content: "";
  position: absolute;
  top: 0;
  height: ${props => props.theme.isMobile ? '100vh' : '120vh'};
  width: 100%;
  background: ${props => props.theme.isMobile ?
    'linear-gradient(to top, black 41%, white 41%)'
    : 'linear-gradient(to bottom right, black 50%, white 50%)'};
  z-index: -1;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: this._getTheme("theme1"),
      isMobile: window.innerWidth < 500,
    };

    // var config = {
    //   apiKey: "AIzaSyDXLUb7_sZn_u5FW1Sd5KkC5_gh8vCZfYg",
    //   authDomain: "l443018-63fc1.firebaseapp.com",
    //   databaseURL: "https://l443018-63fc1.firebaseio.com",
    //   projectId: "l443018-63fc1",
    //   storageBucket: "l443018-63fc1.appspot.com",
    //   messagingSenderId: "277479446490"
    // };
    // firebase.initializeApp(config);
    // firebase.database().ref("test").once("value", a => {
    //   console.log('a', a.val());
    // }, b => {
    //   console.log('b', b);
    // });
  }

  handleGoAnchor(id) {
    window.scrollTo(0, document.getElementById(id).offsetTop);
  }

  handleSetTheme(theme) {
    this.setState({ theme: theme });
  }

  _getTheme(key) {
    const theme = {
      theme1: { id: 1, primary: "#000000" },
      theme2: { id: 2, primary: "#fff1d3" },
      theme3: { id: 3, primary: "#d8eec3" },
    };

    return { ...theme[key], ...{isMobile: window.innerWidth < 500} };
  }

  render() {
    return (
      // 文字 Blog 影音 dance band kyudo 音樂 sing kyudo chado wafuku 程式
      <ThemeProvider theme={this.state.theme}>
        <AppWrapper>
          <Menu goAnchor={this.handleGoAnchor} />
          <TitleBg />
          <Title>
            <div>
              <div className="name">Laura</div>
              <div>
                <a
                  href="https://linkedin.com/in/l443018/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link fab fa-linkedin-in"
                >
                  {" "}
                </a>
                <a
                  href="mailto:l443018@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link far fa-envelope"
                >
                  {" "}
                </a>
              </div>
            </div>
          </Title>
          {/* <Header onSetTheme={x => this.handleSetTheme(x)}></Header> */}
          {/* <About id="about" /> */}
          <Links id="links" />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
