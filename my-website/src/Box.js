import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
  }

  renderAboutInfo() {
    const backgroundImage1 = "/a1.png";
    const backgroundImage2 = "/a2.png";
    return (
      <div className="multibox-container">
        <div 
          className="content-window-main-wrapper"
          style={{backgroundImage: `url(${backgroundImage1})`}}
        >
          <div className="main-text">Hello, this is Kearnie!</div>
          <div className="main-text">I like stargazing, tea lattes with lots of foamed milk, planetariums, and sitting through movie credits.</div>
          <div className="main-text">I am currently studying computer science and art at Carnegie Mellon University, and my interests lie mainly in human-computer interaction, front-end and full-stack software development, and design.</div>
          <div className="main-text">
            <a className="file-links" href="kearnie_resume.pdf" target="_blank">resume</a> | <a className="file-links" href="mailto:xrniel@gmail.com">xrniel@gmail.com</a>
          </div>
        </div>
        <div 
          className="content-window-main-wrapper"
          style={{backgroundImage: `url(${backgroundImage2})`}}
        >
          <div className="main-text">Hello, this is Kearnie!</div>
          <div className="main-text">I like stargazing, tea lattes with lots of foamed milk, planetariums, and sitting through movie credits.</div>
          <div className="main-text">I am currently studying computer science and art at Carnegie Mellon University, and my interests lie mainly in human-computer interaction, front-end and full-stack software development, and design.</div>
          <div className="main-text">
            <a className="file-links" href="kearnie_resume.pdf" target="_blank">resume</a> | <a className="file-links" href="mailto:xrniel@gmail.com">xrniel@gmail.com</a>
          </div>
        </div>
      </div>
    );
  }

  renderBlockInfo() {
    return (
      <div>
      </div>
    );
  }

  render() {
    return (
      <div className="content-container">
        {this.props.tab === 'about' && this.renderAboutInfo()}
        {this.props.tab !== 'about' && this.renderBlockInfo()}
      </div>
    );
  }

}

export default Box;