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
            desc: 'Under construction! Coming soon :)'
          },
          {
            title: 'Johnson & Johnson',
            role: 'Product Manager Intern',
            date: 'June 2017 - January 2018',
            link: 'https://www.behance.net/gallery/56165733/J-J-EADS-Data-Dashboard',
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
            desc: 'Under construction! Coming soon :)'
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
            desc: 'Under construction! Coming soon :)'
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