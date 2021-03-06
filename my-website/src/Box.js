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
          <div className="main-text">I am currently a front-end software engineer intern at <a className="soft-link" href="https://transcend.io" target="_blank" title="Transcend">Transcend</a>, where I am building interfaces of online Data Privacy Centers that will give users more power over their personal data.</div> 
          <div className="main-text">I recently graduated from <a className="soft-link" href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html" target="_blank" title="Bachelor of Computer Science and Arts (BCSA)">Carnegie Mellon University</a>, where I studied computer science and art. I am particularly passionate about <a className="soft-link" href="https://hcii.cmu.edu/" target="_blank" title="Human-Computer Interaction">HCI</a>, accessibility, and growth, wanting to create empathetic experiences that will be more approachable and empowering for end users.</div>
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
              <li>kumquat lemon green tea</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  renderField(field, classSpec) {
    return (
      <div className={classSpec}>{field}</div>
    );
  }

  renderBlockInfo(boxInfo, i) {
    const backgroundCrops = ["/b1.png", "/b2.png", "/c1.png", "/c2.png", "/d1.png", "/d2.png"];
    const backgroundMaxIndex = backgroundCrops.length;
    let startIndex = 0;
    switch(this.props.tab) {
      case 'work':
        startIndex = 0;
        break;
      case 'dev':
        startIndex = 2;
        break;
      case 'arts':
        startIndex = 4;
        break;
      default:
        startIndex = 0;
    }
    const bgIndex = (i + startIndex) % backgroundMaxIndex;
    return (
      <div 
        className="content-window-main-wrapper"
        style={{backgroundImage: `url(${backgroundCrops[bgIndex]})`}}
      >
        <div className="content-window-header-bar">
          {boxInfo.title}
        </div>
        {boxInfo.role && this.renderField(boxInfo.role, 'subtitle')}
        {boxInfo.date && this.renderField(boxInfo.date, 'date')}
        <div className="main-text">
          {boxInfo.desc && boxInfo.desc} 
        </div>
        <div className="main-text">
          Please go <a href={boxInfo.link} target="_blank" title={boxInfo.linkLabel}>here</a> to learn more :)<br/>
        </div>
        {boxInfo.msg && this.renderField(boxInfo.msg, 'main-text')}
      </div>
    );
  }

  render() {
    //console.log(this.props.boxes);
    const blocks = (this.props.tab !== 'about') ? (this.props.boxes.map((boxInfo, i) => this.renderBlockInfo(boxInfo, i))) : null;
    return (
      <div className="content-container">
        {this.props.tab === 'about' && this.renderAboutInfo()}
        <div className="multibox-container">
          {blocks}
        </div>
      </div>
    );
  }

}

export default Box;