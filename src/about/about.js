import React, { Component } from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  height: 100vh;
  font-size: 20px;
  text-align: right;
  padding: 20px;
`;

export default class About extends Component {
  render() {
    return (
      <AboutWrapper {...this.props}>
        About
      </AboutWrapper>
    );
  }
}
