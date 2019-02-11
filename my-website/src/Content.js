import React, { Component } from 'react';
import './Content.css';
import Box from './Box.js';

class Content extends Component {
  constructor(props) {
    super(props);
  }

  renderAboutContent() {
    return (
      <Box
        tab={'about'}
      />
    );
  }

  renderWorkContent() {
    return (
      <Box
        tab={'work'}
        boxes={[
          {
            title: 'Terrain Data',
            role: 'Full Stack Software Engineer Intern',
            date: 'May 2018 - August 2018',
            link: 'https://www.behance.net/gallery/71244959/Terrain-Data-2018-Internship',
            linkLabel: 'Terrain 2018 work!',
            desc: 'Under construction! Coming soon :)'
          },
          {
            title: 'Johnson & Johnson',
            role: 'Product Manager Intern',
            date: 'June 2017 - January 2018',
            link: 'https://www.behance.net/gallery/56165733/J-J-EADS-Data-Dashboard',
            linkLabel: 'J&J 2017 work!',
            desc: 'Under construction! Coming soon :)'
          }
        ]}
      />
    );
  }

  renderDevContent() {
    return (
      <Box
        tab={'dev'}
        boxes={[
          {
            title: 'Code and such',
            desc: 'Under construction! Coming soon :)',
            link: 'https://github.com/kearnie',
            linkLabel: 'my github!',
            msg: "Most recently I won Google's Best Accessibility Hack award with 3 friends at TartanHacks 2019! We developed a Chrome extension that includes a suite of personalized features that improves web-browsing experience for access."
          }
        ]}
      />
    );
  }

  renderArtsContent() {
    return (
      <Box
        tab={'arts'}
        boxes={[
          {
            title: 'Arts and stuff',
            desc: 'Under construction! Coming soon :)',
            link: 'https://www.behance.net/kearniel',
            linkLabel: 'my portfolio!',
            msg: "Currently I am working on my senior year capstone project revolving around personal experiences as a computer science and art student at Carnegie Mellon, which will be presented at the Meeting of the Minds Undergraduate Research Symposium."
          }
        ]}
      />
    );
  }

  render() {
    const tabToContents = {
      about: this.renderAboutContent,
      work: this.renderWorkContent,
      dev: this.renderDevContent,
      arts: this.renderArtsContent
    };
    return(
      <div>
        {(this.props.currentTab !== 'home') && tabToContents[this.props.currentTab]()}
      </div>
    );
  }
}

export default Content;