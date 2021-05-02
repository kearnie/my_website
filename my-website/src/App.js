import React, { Component } from 'react';
import './App.css';
import home from './home.svg';
// import Tab from './Tab.js';
// import Content from './Content.js';
// import resumeicon from './resume.svg';
// import linkedinicon from './linkedin.svg';
// import behanceicon from './behance.svg';
// import githubicon from './github.svg';
// import twittericon from './twitter.svg';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleTabChange = this.handleTabChange.bind(this);
  //   this.state = {currentTab: 'home'};
  // }

  // handleTabChange(clickedTab) {
  //   this.setState({currentTab: clickedTab});
  // }

  render() {
    // const tabs = ['about', 'work', 'dev', 'arts'];
    // const backgroundImg = "/fogg-bg.svg";
    // console.log(this.state.currentTab);

    return (
      <div className="App">
        <header className="App-header">
          <div className="contents-container">
            <img src={home} className="home" />
            <p><strong>kearnie.</strong> currently doing development, design, and product at Transcend.</p>
            <p>previously at Terrain Data, Johnson & Johnson, and Carnegie Mellon.</p>
          </div>
        </header>
      </div>
    );

    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <div className="contents-container">
    //         <a href="https://www.linkedin.com/in/kearnie/" target="_blank" rel="noopener noreferrer" title="linkedin">
    //           <p>kearnie.</p>
    //         </a>
    //         <a href="https://www.behance.net/kearnie" target="_blank" rel="noopener noreferrer" title="portfolio">
    //           <p>E</p>
    //         </a>
    //         <a href="https://github.com/kearnie" target="_blank" rel="noopener noreferrer" title="github">
    //           <p>A</p>
    //         </a>
    //         <a href="https://transcend.io" target="_blank" rel="noopener noreferrer" title="work">
    //           <p>R</p>
    //         </a>
    //         <a href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html" target="_blank" rel="noopener noreferrer" title="school">
    //           <p>N</p>
    //         </a>
    //         <a href="https://twitter.com/xkrnie" target="_blank" rel="noopener noreferrer" title="twitter">
    //           <p>I</p>
    //         </a>
    //         <a href="https://www.youtube.com/watch?v=Tkc_9OPC20E" target="_blank" rel="noopener noreferrer" title="current fav song">
    //           <p>E</p>
    //         </a>
    //       </div>
    //     </header>
    //   </div>
    // );


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