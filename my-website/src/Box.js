import React, { Component } from 'react';
import './Box.css';
import linkedinicon from './linkedin.svg';
import githubicon from './icongithub.svg';
import behanceicon from './iconbehance.svg';
import twittericon from './sadfgg.svg';
import vimeoicon from './iconvimeo.svg';

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
          <div className="main-text">I am currently studying computer science and art at Carnegie Mellon University, and my interests lie mainly in human-computer interaction, front-end and full-stack software development, and design.</div>
          <div className="footer">
            <a className="file-links" href="kearnie_resume.pdf" target="_blank">resume</a> | <a className="file-links" href="mailto:xrniel@gmail.com">xrniel@gmail.com</a>
            <div className="ext-icons">
              <a className="linkedin" href="https://www.linkedin.com/in/kearnie/" target="_blank" title="LinkedIn"><img src={linkedinicon}/></a>
              <a className="github" href="https://github.com/kearnie" target="_blank" title="Github"><img src={githubicon}/></a>
              <a className="behance" href="https://www.behance.net/kearniel" target="_blank" title="Behance"><img src={behanceicon}/></a>
              <a className="twitter" href="https://twitter.com/xrniel" target="_blank" title="Twitter"><img src={twittericon}/></a>
              <a className="vimeo" href="https://vimeo.com/kearniel" target="_blank" title="Vimeo"><img src={vimeoicon}/></a>
            </div>
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