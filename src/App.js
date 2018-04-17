import React, { Component } from 'react';
import './App.css';
import './assets/font/fontawesome.css';
import './assets/font/fa-brands.css';
import Header from './header/header';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import firebase from 'firebase';

const theme = {
  theme1: { id: 1, bg: '#282855', text: 'white'},
  theme2: { id: 2, bg: '#fff1d3', text: '#743000'},
  theme3: { id: 3, bg: '#d8eec3', text: '#1b5327'},
};

const AppWrapper = styled.div`
  &:before {
    content: '';
    position: absolute;
    height: 120vh;
    width: 100%;
    background: linear-gradient(to bottom right, black 50%, white 50%);
    z-index: -1;
  }
`;

const Name = styled.div`
  color: white;
  display: inline-block;
  vertical-align: middle;
  font-size: 100px;
  height: 100vh;
  padding: 50px;

  &:before {
    content: '';
    height: 100%;
    width: 0;
    display: inline-block;
    vertical-align: middle;
  }
`;

const Links = styled.div`
  text-align: right;
  position: fixed;
  bottom: 30px;
  width: 100%;
  z-index: 1;

  &:hover {
    .fab {
      opacity: 0.5;
    }
  }

  .fab {
    color: black;
    padding: 10px;
    cursor: pointer;
    font-size: 40px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {theme: 'theme1'};

    var config = {
      apiKey: "AIzaSyDXLUb7_sZn_u5FW1Sd5KkC5_gh8vCZfYg",
      authDomain: "l443018-63fc1.firebaseapp.com",
      databaseURL: "https://l443018-63fc1.firebaseio.com",
      projectId: "l443018-63fc1",
      storageBucket: "l443018-63fc1.appspot.com",
      messagingSenderId: "277479446490"
    };
    firebase.initializeApp(config);
    // firebase.database().ref("test").once("value", a => {
    //   console.log('a', a.val());
    // }, b => {
    //   console.log('b', b);
    // });
  }

  handleSetTheme(theme) {
    this.setState({theme: theme});
  }

  render() {
    return (
      // 文字 Blog 影音 dance band kyudo 音樂 sing kyudo chado wafuku 程式
      <ThemeProvider theme={theme[this.state.theme]}>
        <AppWrapper>
          <Name>Laura</Name>
          <Links>
            <a href="https://linkedin.com/in/l443018/" target="_blank" className="fab fa-linkedin"></a>
            <a href="https://github.com/l443018" target="_blank" className="fab fa-github"></a>
            <a href="https://medium.com/@l443018" target="_blank" className="fab fa-medium"></a>
            <a href="https://www.slideshare.net/l443018" target="_blank" className="fab fa-slideshare"></a>
            <br />
            <a href="https://www.facebook.com/l443018" target="_blank" className="fab fa-facebook"></a>
            <a href="https://www.instagram.com/l443018" target="_blank" className="fab fa-instagram"></a>
            <a href="http://l443018.blogspot.tw/" target="_blank" className="fab fa-blogger"></a>
          </Links>
          {/* <Header onSetTheme={x => this.handleSetTheme(x)}></Header> */}
          <Header></Header>
          <Header></Header>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
