import React, { Component } from 'react';
import styled from 'styled-components';
import onClickOutside from "react-onclickoutside";
import { titleStartPercent } from '../App';

const MenuWrapper = styled.div`
  position: fixed;
  right: 0;
  padding: 25px;
  
  &.skrollable-after {
    height: 60px;
    cursor: pointer;
    text-align: right;
    transition: left 0.3s;
    left: auto !important;

    &:not(.is-active):hover {
      opacity: 0.3;
    }
  }

  &.is-active {
    left: auto !important;
  }
`;

const MenuItem = styled.div`
  position: relative;
  height: 33%;
  font-size: 40px;
  background-color: transparent;
  cursor: pointer;
  padding-bootom: 0px;

  &.skrollable-between,
  &.is-active {
    &:hover {
      opacity: 0.3;
    }
  }

  &.skrollable-after {
    height: 2px;
    width: auto;
    overflow: hidden;
    transition: padding-bottom 0.3s, height 0.3s;

    &:before {
      content: '';
      display: block;
      left: calc(100% - 20px);
      right: 0px;      
      background-color: black;
      height: 2px;
      width: 20px;
      transition: opacity 0s, left 0s;
    }
  }

  &.is-active {
    font-size: 25px !important;
    height: 40px;
    padding-bottom: 25px;
    transition-delay: 0.3s;

    &:before {
      opacity: 0;
      left: 0;
      position: absolute;
      width: auto;
      transition: opacity 0.3s cubic-bezier(.97,.01,1,.02), left 0.3s cubic-bezier(0,1.15,.59,.93);
    }
  }

  &:first-child {
    left: 56%;
  }

  &:nth-child(2) {
    left: 29%;
    margin-top: 5px;
  }

  &:nth-child(3) {
    left: 0%;
    margin-top: 5px;
  }
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {isActive: false};
    this.handleClick = this.handleClick.bind(this);
    document.addEventListener('scroll', () => {
      //   if (this.state.isActive) {
      //     element.classList.remove('is-active');
      //   } else {
      //     element.classList.add('is-active');
      //   }
      // });
      // this.setState(prevState => ({
      //   isActive: !prevState.isActive
      // }));
    })
  }

  handleClick(e) {
    const wrapper = document.querySelector('.menu-wrapper');
    if (this.state.isActive) {
      wrapper.classList.remove('is-active');
    } else {
      wrapper.classList.add('is-active');
    }

    [...document.getElementsByClassName('menu-item')].forEach(element => {
      if (this.state.isActive) {
        element.classList.remove('is-active');
      } else {
        element.classList.add('is-active');
      }
    });
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  handleClickOutside() {
    this.setState(prevState => ({
      isActive: false
    }));
    [...document.getElementsByClassName('menu-item')].forEach(element => {
      element.classList.remove('is-active');
    });
    document.querySelector('.menu-wrapper').classList.remove('is-active');
  }

  render() {
    return (
      <MenuWrapper
        className="menu-wrapper"
        onClick={this.handleClick}
        {...this.props}
        data-0="left: 41%; height: 60%; top: 30%;"
        {...{['data-' + (titleStartPercent + 5) + 'p']: 'left: 92%; height: 10%; top: 0%;'}}>
        <MenuItem
          id="firstMenuItem"
          className="menu-item"
          data-0="font-size: 40px; left: 56%;"
          {...{['data-' + (titleStartPercent + 4) + 'p']: 'font-size: 12px;left: 63%;'}}
          {...{['data-' + (titleStartPercent + 5) + 'p']: 'font-size: 0px; left: 0%;'}}>
          About</MenuItem>
        <MenuItem
          className="menu-item"
          data-anchor-target="#firstMenuItem"
          data-0="font-size: 40px; left: 29%;"
          {...{['data-' + (titleStartPercent + 4) + 'p']: 'font-size: 12px;left: 29%;'}}
          {...{['data-' + (titleStartPercent + 5) + 'p']: 'font-size: 0px; left: 0%;'}}>
          Works</MenuItem>
        <MenuItem
          className="menu-item"
          data-anchor-target="#firstMenuItem"
          data-0="font-size: 40px; left: 0%;"
          {...{['data-' + (titleStartPercent + 4) + 'p']: 'font-size: 12px;left: 0%;'}}
          {...{['data-' + (titleStartPercent + 5) + 'p']: 'font-size: 0px; left: 0%;'}}>
          Links</MenuItem>
      </MenuWrapper>
    );
  }
}
export default onClickOutside(Menu);
