import React from 'react';

import './App.css';
import './assets/fonts/fontawesome.css';
import './assets/fonts/fa-brands.css';
import './assets/fonts/fa-regular.css';

const App = () => {
  return (
    <div>
      <div className="triangle">
        <div className="main-logos">
          <div className="name">Laura</div>

          <a
            className="item fab fa-linkedin-in"
            href="https://www.linkedin.com/in/l443018/"
            target="_blank"
          ></a>
          <a
            className="item far fa-envelope"
            href="mailto:l443018@gmail.com"
            target="_blank"
          ></a>
        </div>

        <div className="work-logos">
          <a href="https://github.com/l443018" target="_blank" class="item fab fa-github"> </a>
          <a href="https://medium.com/@l443018" target="_blank" class="item fab fa-medium"> </a>
          <a href="https://www.slideshare.net/l443018" target="_blank" class="item fab fa-slideshare"> </a>
          <div className="seperator"></div>
          <a href="https://l443018.blogspot.tw/" target="_blank" rel="noopener noreferrer" class="item fab fa-blogger"> </a>
          <a href="https:/tarotlina.wordpress.com" target="_blank" rel="noopener noreferrer" class="item fab fa-wordpress"> </a>
        </div>
      </div>
    </div>
  );
}

export default App;
