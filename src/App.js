import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import { ThemeProvider } from 'styled-components';

const theme = {
  theme1: { id: 1, bg: '#282855', text: 'white'},
  theme2: { id: 2, bg: '#fff1d3', text: '#743000'},
  theme3: { id: 3, bg: '#d8eec3', text: '#1b5327'},
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {theme: 'theme1'};
  }

  handleSetTheme(theme) {
    this.setState({theme: theme});
  }

  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme[this.state.theme]}>
          <Header onSetTheme={x => this.handleSetTheme(x)}></Header>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;

