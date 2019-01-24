import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Tab from './Tab.js';

class App extends Component {
  render() {
    const tabs = ['home', 'work', 'code', 'arts'];
    return (
      <div className="App">
        <header className="App-header">
          <Tab
            tabs={tabs}
          />
        </header>
      </div>
    );
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