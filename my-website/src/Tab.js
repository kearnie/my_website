import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.updateTab = this.updateTab.bind(this);
  }

  state = {
    currentTab: this.props.currentTab,
  }

  // updateTab(tabName) {
  //   this.setState({currentTab: tabName});
  // }

  // renderTab(tabName) {
  //   return (
  //     <div 
  //       className="sidebar-tab"
  //       onClick={this.updateTab}
  //     >
  //       {tabName}
  //     </div>
  //   );
  // }

  render() {
    const tabs = this.props.tabs.map(
      (tabName) => {
        return (
          <div
            className="sidebar-tab"
            onClick={() => this.setState({currentTab: tabName})}
          >
            {tabName}
          </div>
        );
      }
    );
    return (
      <div className="sidebar">
        {tabs}
      </div>
    );
  }
}

export default Tab;