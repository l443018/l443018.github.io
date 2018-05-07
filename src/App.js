import React, { Component } from 'react';

import './App.css';
import './assets/font/fontawesome.css';
import './assets/font/fa-brands.css';
import './assets/font/fa-regular.css';

import Header from './header/header';
import Menu from './menu/menu';

import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import firebase from 'firebase';
import skrollr from 'skrollr';

export const titleStartPercent = 10;

const theme = {
  theme1: { id: 1, bg: '#282855', text: 'white'},
  theme2: { id: 2, bg: '#fff1d3', text: '#743000'},
  theme3: { id: 3, bg: '#d8eec3', text: '#1b5327'},
};

const AppWrapper = styled.div`
`;

const Title = styled.div`
  position: fixed;
  display: inline-block;
  height: 100vh;
  padding: 8vw;

  > div {
    display: inline-block;
    vertical-align: middle;
  }

  &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: 0;
  }

  .name {
    color: white;
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

const Me = styled.div`
  display: inline-block;
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: gray;
  height: 500px;
  width: 200px;
`;

const TitleBg = styled.div`
  content: '';
  position: ${props => props.isFixed ? 'fixed' : 'absolute'};
  top: ${props => props.isFixed ? '0' : titleStartPercent + '%'};
  height: 120vh;
  width: 100%;
  background: linear-gradient(to bottom right, black 50%, white 50%);
  z-index: -1;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {theme: 'theme1'};

    setTimeout(() => {
      skrollr.init();
    });

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
          <TitleBg 
            isFixed
            data-0="display: block;"
            {...{['data-' + titleStartPercent + 'p']: 'display: none;'}}></TitleBg>
          <TitleBg
            data-0="display: none;"
            {...{['data-' + titleStartPercent + 'p']: 'display: block;'}}></TitleBg>
          <Title
            data-0="top: 0px;"
            {...{['data-' + titleStartPercent + 'p']: 'top: 50px;'}}
            data-99p="z-index: 1"
            data-100p="z-index: -1">
            <div>
              <div className="name">Laura</div>
              <div>
                <a href="https://linkedin.com/in/l443018/" target="_blank" rel="noopener noreferrer" className="link fab fa-linkedin-in"> </a>
                <a href="mailto:l443018@gmail.com" target="_blank" rel="noopener noreferrer" className="link far fa-envelope"> </a>
              </div>
            </div>
          </Title>
          <Menu></Menu>
          {/* <Me></Me> */}
          <Links>
            <a href="https://github.com/l443018" target="_blank" rel="noopener noreferrer" className="fab fa-github"> </a>
            <a href="https://medium.com/@l443018" target="_blank" rel="noopener noreferrer" className="fab fa-medium"> </a>
            <a href="https://www.slideshare.net/l443018" target="_blank" rel="noopener noreferrer" className="fab fa-slideshare"> </a>
            <br />
            <a href="https://www.instagram.com/l443018" target="_blank" rel="noopener noreferrer" className="fab fa-instagram"> </a>
            <a href="http://l443018.blogspot.tw/" target="_blank" rel="noopener noreferrer" className="fab fa-blogger"> </a>
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
