import React, { Component } from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  position: absolute;
  top: 30%;
  bottom: 10%;
  right: 0;
  padding: 16px;
`;

const MenuItem = styled.div`
  position: relative;
  height: 33%;
  font-size: 40px;
  background-color: transparent;

  &:first-child {
    left: 56%;
  }

  &:nth-child(2) {
    left: 29%;
  }

  &:nth-child(3) {
    left: 0%;
  }
`;

export default class Menu extends Component {
  render() {
    return (
      <MenuWrapper
        {...this.props}
        data-0="left: 41%;bottom: 10%;cursor: default;"
        data-41-top="left: 92%;"
        data-40-top="left: 92%;bottom: 70%;cursor: pointer"
        >
        <MenuItem
          id="firstMenuItem"
          data-0="font-size: 40px;height: 33%;background-color: transparent;left: 56%;"
          data-50-top="font-size: 0px;height: 2px;background-color: black; width: 20px;"
          data-40-top="font-size: 0px;height: 2px;background-color: black; width: 20px;left: 0%;">About</MenuItem>
        <MenuItem
          data-anchor-target="#firstMenuItem"
          data-0="font-size: 40px;height: 33%;background-color: transparent;margin-top:5px;left: 29%;"
          data-50-top="font-size: 0px;height: 2px;margin-top:5px;background-color: black; width: 20px;"
          data-40-top="font-size: 0px;height: 2px;margin-top:5px;background-color: black; width: 20px;left: 0%;">Resume</MenuItem>
        <MenuItem
          data-anchor-target="#firstMenuItem"
          data-0="font-size: 40px;height: 33%;background-color: transparent;margin-top:5px;left: 0%;"
          data-50-top="font-size: 0px;height: 2px;margin-top:5px;background-color: black; width: 20px;"
          data-40-top="font-size: 0px;height: 2px;margin-top:5px;background-color: black; width: 20px;left: 0%;">Works</MenuItem>
      </MenuWrapper>
    );
  }
}
