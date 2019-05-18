import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

const MenuWrapper = styled.div`
  position: absolute;
  top: 28%;
  right: 0;
  height: 42%;
  width: 52%;

  ${props => props.theme.isMobile && `
    height: 60px;
    cursor: pointer;
    text-align: right;
    transition: left 0.3s;
    left: auto !important;

    &:not(.is-active):hover {
      opacity: 0.3;
    }
  `}

  &.is-active {
    left: auto !important;
    height: auto !important;
  }
`;

const MenuItem = styled.div`
  position: relative;
  font-size: 40px;
  background-color: transparent;
  margin-bottom: 6px;
  cursor: pointer;

  ${props => props.theme.isMobile && `
    height: 0;
    width: 30px;
    overflow: hidden;
    transition: padding-bottom 0.3s, height 0.3s, border-width 0s;
    left: 0% !important;
    font-size: 0 !important;
    border-bottom: 3px solid black;

    &::after {
      content: "";
      position: absolute;
      left: 100%;
      right: 0;
      bottom: 7px;
      height: 3px;
      background: white;
      transition: left 0.3s ease-out;
    }
  `}

  &[disabled] {
    pointer-events: none;
    opacity: 0.4;
  }

  &:hover {
    opacity: 0.6;
  }

  &.is-active {
    font-size: 30px !important;
    height: 40px;
    padding-bottom: 50px;
    transition-delay: 0.3s;
    border-width: 0;
    width: auto;
    color: white;
    border-color: white;

    &:hover::after {
      left: 0;
    }
  }

  &:first-child {
    left: 56%;
  }

  &:nth-child(2) {
    left: 28%;
    top: 30%;
  }

  &:nth-child(3) {
    left: 0;
    top: 60%;
  }
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };

    // document.addEventListener("scroll", () => {
      //   if (this.state.isActive) {
      //     element.classList.remove('is-active');
      //   } else {
      //     element.classList.add('is-active');
      //   }
      // });
      // this.setState(prevState => ({
      //   isActive: !prevState.isActive
      // }));
    // });
  }

  handleClickItem(id) {
    this.props.goAnchor(id);
  }

  handleClickWrapper(e) {
    // const wrapper = document.querySelector(".menu-wrapper");
    // if (this.state.isActive) {
    //   wrapper.classList.remove("is-active");
    //   document.documentElement.classList.remove("is-open-menu");
    //   [...document.getElementsByClassName("menu-item")].forEach(element => {
    //     element.classList.remove("is-active");
    //   });
    // } else {
    //   wrapper.classList.add("is-active");
    //   document.documentElement.classList.add("is-open-menu");
    //   [...document.getElementsByClassName("menu-item")].forEach(element => {
    //     element.classList.add("is-active");
    //   });
    // }

    // this.setState(prevState => ({
    //   isActive: !prevState.isActive
    // }));
  }

  handleClickOutside() {
    // this.setState(prevState => ({
    //   isActive: false
    // }));
    // document.querySelector(".menu-wrapper").classList.remove("is-active");
    // document.documentElement.classList.remove("is-open-menu");
    // [...document.getElementsByClassName("menu-item")].forEach(element => {
    //   element.classList.remove("is-active");
    // });
  }

  render() {
    return (
      <MenuWrapper
        className="menu-wrapper"
        onClick={this.handleClickWrapper}
        {...this.props}
      >
        <MenuItem
          id="firstMenuItem"
          className="menu-item"
          onClick={() => this.handleClickItem('about')}
          disabled
        >
          About
        </MenuItem>
        <MenuItem
          className="menu-item"
          onClick={() => this.handleClickItem('works')}
          disabled
        >
          Works
        </MenuItem>
        <MenuItem
          className="menu-item"
          onClick={() => this.handleClickItem('links')}
        >
          Links
        </MenuItem>
      </MenuWrapper>
    );
  }
}
export default onClickOutside(Menu);
