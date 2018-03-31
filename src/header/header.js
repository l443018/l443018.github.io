import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding: 40px;
  text-align: center;
  transition: all 0.5s;
  word-spacing: 10px;
  letter-spacing: 12px;
  font-weight: bold;
  
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.bg};
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
    ${props => { return props.theme.id === 1 ? buttonActive : '' }}
  }
  &:nth-child(3) {
    ${props => { return props.theme.id === 2 ? buttonActive : '' }}
  }
  &:nth-child(5) {
    ${props => { return props.theme.id === 3 ? buttonActive : '' }}
  }
`;

export default class Header extends Component {
  setTheme(theme) {
    this.props.onSetTheme(theme);
  }

  render() {
    return (
      <HeaderWrapper {...this.props}>
        <Button onClick={() => this.setTheme('theme1')}>工程師</Button>
        <Button>/</Button>
        <Button onClick={() => this.setTheme('theme2')}>武射系</Button>
        <Button>/</Button>
        <Button onClick={() => this.setTheme('theme3')}>裏千家</Button>
      </HeaderWrapper>
    );
  }
}
