import React, { Component } from 'react';
import './App.css';
// import Tab from './Tab.js';
// import Content from './Content.js';
// import resumeicon from './resume.svg';
import linkedinicon from './linkedin.svg';
import behanceicon from './behance.svg';
import githubicon from './github.svg';
import twittericon from './twitter.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.state = {currentTab: 'home'};
  }

  handleTabChange(clickedTab) {
    this.setState({currentTab: clickedTab});
  }

  render() {
    // const tabs = ['about', 'work', 'dev', 'arts'];
    // const backgroundImg = "/fogg-bg.svg";
    // console.log(this.state.currentTab);

    return (
      <div className="App">
        <header className="App-header">
          <div className="contents-container">
            <div className="big-text">K</div>
            <div className="big-text">E</div>
            <div className="big-text">A</div>
            <div className="big-text">R</div>
            <div className="big-text">N</div>
            <div className="big-text">I</div>
            <div className="big-text">E</div>
          </div>
        </header>
      </div>
    );


    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <div className="tabs-container">
    //         <Tab
    //           tabs={tabs}
    //           currentTab={this.state.currentTab}
    //           onTabChange={this.handleTabChange}
    //         />
    //       </div>
    //       <div className="contents-container">
    //         <Content 
    //           currentTab={this.state.currentTab}
    //         />
    //       </div>
    //       <div className="credits">
    //         site by kearnie, 2019
    //       </div>
    //     </header>
    //   </div>
    // );


    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
  }
}

export default App;