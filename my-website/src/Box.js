import React, { Component } from 'react';
import './Box.css';
import linkedinicon from './linkedin.svg';
import behanceicon from './behance.svg';
import githubicon from './github.svg';
import twittericon from './twitter.svg';
import instagramicon from './instagram.svg';
import vimeoicon from './vimeo.svg';

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
          <div className="main-text">I am currently studying computer science and art at Carnegie Mellon University, and am excited to apply my skills in areas such as software engineering, product management, and design.</div>
          <div className="main-text">I am particularly passionate about HCI, accessibility, and growth!</div>
          <div className="footer">
            <a className="file-links" href="kearnie_resume.pdf" target="_blank">resume</a> | <a className="file-links" href="mailto:xrniel@gmail.com">xrniel@gmail.com</a>
            <div className="ext-icons">
              <a className="icon" href="https://www.linkedin.com/in/kearnie/" target="_blank" title="LinkedIn"><img src={linkedinicon}/></a>
              <a className="icon" href="https://www.behance.net/kearniel" target="_blank" title="Behance"><img src={behanceicon}/></a>
              <a className="icon" href="https://github.com/kearnie" target="_blank" title="Github"><img src={githubicon}/></a>
              <a className="icon" href="https://twitter.com/xrniel" target="_blank" title="Twitter"><img src={twittericon}/></a>
              <a className="icon" href="https://www.instagram.com/xrniel/" target="_blank" title="Instagram"><img src={instagramicon}/></a>
              <a className="icon" href="https://vimeo.com/kearniel" target="_blank" title="Vimeo"><img src={vimeoicon}/></a>
            </div>
          </div>
        </div>
        <div 
          className="content-window-main-wrapper"
          style={{backgroundImage: `url(${backgroundImage2})`}}
        >
          <div className="main-text">
            My goals:
            <ul>
              <li>do good work</li>
              <li>help others</li>
              <li>be kind</li>
            </ul>
          </div>
          <div className="main-text">
            Things I like:
            <ul>
              <li>stargazing</li>
              <li>tea lattes with lots of foamed milk</li>
              <li>planetariums</li>
              <li>sitting through movie credits</li>
              <li>acai bowls</li>
            </ul>
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