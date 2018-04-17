import React, { Component } from 'react';
import styled from 'styled-components';
import { hexToRgb } from '../common-method';

const HeaderWrapper = styled.div`
  height: 100vh;
`;

export default class Header extends Component {
  setTheme(theme) {
    this.props.onSetTheme(theme);
  }

  render() {
    return (
      <HeaderWrapper {...this.props}>
        <div className="test">
        </div>
      </HeaderWrapper>
    );
  }
}
