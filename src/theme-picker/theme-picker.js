import React, { Component } from 'react';
import styled from 'styled-components';

const ThemePickerWrapper = styled.div`
  text-align: center;
  height: 100vh;
  word-spacing: 10px;
  letter-spacing: 12px;
  font-weight: bold;

  &:before {
    content: '';
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }

  .middle {
    display: inline-block;
    vertical-align: middle;
  }

  color: black;
  background-color: white;
`;

const buttonActive = `
  letter-spacing: 20px;
  opacity: 1;
  cursor: default;
`;
const Button = styled.div`
  display: inline-block;
  font-size: 40px;
  padding: 0 10px;
  opacity: 0.8;
  transition: letter-spacing 0.3s;
  cursor: pointer;
  
  &:hover {
    letter-spacing: 20px;
  }

  &:first-child {
    ${props => props.theme.id === 1 ? buttonActive : '' }
  }
  &:nth-child(3) {
    ${props => props.theme.id === 2 ? buttonActive : '' }
  }
  &:nth-child(5) {
    ${props => props.theme.id === 3 ? buttonActive : '' }
  }
`;

export default class ThemePicker extends Component {
  setTheme(theme) {
    this.props.onSetTheme(theme);
  }

  render() {
    return (
      <ThemePickerWrapper {...this.props}>
        <div className="middle">
          <Button onClick={() => this.setTheme('theme1')}>工程師</Button>
          <Button>/</Button>
          <Button onClick={() => this.setTheme('theme2')}>武射系</Button>
          <Button>/</Button>
          <Button onClick={() => this.setTheme('theme3')}>裏千家</Button>
        </div>
      </ThemePickerWrapper>
    );
  }
}
