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
            title: 'Transcend',
            role: 'Front End Software Engineer Intern',
            date: 'July 2019 - Present',
            link: 'https://transcend.io',
            linkLabel: "Transcend's website!",
            desc: 'Working in a start-up environment in a team of ten, primarily with the CTO and CEO. Building and designing accessible interfaces of company-customizable Data Privacy Centers that give users power over their online personal data in light of modern privacy policies such as the GDPR. Co-owning the front-end product and iterating with MetaLab and Ramotion to transform the consumer experience. New interfaces are scheduled to roll out next quarter!'
          },
          {
            title: 'Terrain Data',
            role: 'Full Stack Software Engineer Intern',
            date: 'May 2018 - August 2018',
            link: 'https://www.behance.net/gallery/71244959/Terrain-Data-2018-Internship',
            linkLabel: 'Terrain 2018 work!',
            desc: "Worked in a start-up environment in a team of fifteen, designing and developing new extensible components for the world's first Algorithm Management System. Refactored necessary elements and worked under a test-driven development process. Features deployed in v5 release increased conversion rates up to 40%, and were demoed to CEO, CTO, and company investors."
          },
          {
            title: 'Johnson & Johnson',
            role: 'Product Manager Intern',
            date: 'June 2017 - January 2018',
            link: 'https://www.behance.net/gallery/56165733/J-J-EADS-Data-Dashboard',
            linkLabel: 'J&J 2017 work!',
            desc: 'Spearheaded a data science and analytics platform project for an aggregate data grid model and centralized ERP system. Prototyped novel internal tools to optimize cross-departmental workflow and asset-tracking practices. Presented wireframes to VP of Enterprise Architecture and senior executives at corporate quarterly demo, and onboarded new contractors onto the project. The designed interfaces are currently live in the War Room office in New Jersey!'
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
            link: 'https://github.com/kearnie',
            linkLabel: 'my github!',
            desc: "Currently designing and building the next Privacy Center at Transcend with a super awesome team! Personally, I am excited about creating more empathetic experiences for end users with thoughtful and compassionate design. Most recently I won Google's Best Accessibility Hack award with three friends at TartanHacks 2019! We developed a Chrome extension that includes a suite of personalized features that improves web browsing experience for access. Peek some other projects on my Github!"
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
            link: 'https://www.behance.net/kearniel',
            linkLabel: 'my portfolio!',
            desc: "Before learning how to program (still learning, honestly), I was an avid illustrator and designer. I want to be able to combine the skill sets of engineering and the arts in products that are approachable and friendly to all consumers. Most recently I completed my senior year capstone project revolving around personal experiences as a computer science and art student at Carnegie Mellon, which was showcased at the Meeting of the Minds Undergraduate Research Symposium in May 2019. Peek some other works on my Behance!"
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