import React, { Component } from 'react';
import styled from 'styled-components';

const LinksWrapper = styled.div`
  height: 100vh;
  font-size: 20px;
  text-align: right;
  padding: 20px;

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

export default class Links extends Component {
  render() {
    return (
      <LinksWrapper {...this.props}>
        Links

        <a
          href="https://github.com/l443018"
          target="_blank"
          rel="noopener noreferrer"
          className="fab fa-github"
        >
          {" "}
        </a>
        <a
          href="https://medium.com/@l443018"
          target="_blank"
          rel="noopener noreferrer"
          className="fab fa-medium"
        >
          {" "}
        </a>
        <a
          href="https://www.slideshare.net/l443018"
          target="_blank"
          rel="noopener noreferrer"
          className="fab fa-slideshare"
        >
          {" "}
        </a>
        <br />
        <a
          href="https://www.instagram.com/l443018"
          target="_blank"
          rel="noopener noreferrer"
          className="fab fa-instagram"
        >
          {" "}
        </a>
        <a
          href="http://l443018.blogspot.tw/"
          target="_blank"
          rel="noopener noreferrer"
          className="fab fa-blogger"
        >
          {" "}
        </a>
      </LinksWrapper>
    );
  }
}
