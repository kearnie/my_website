import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  // state = {
  //   currentTab: this.props.currentTab,
  // }

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
        const tabHighlight = ((this.props.currentTab === "home") || (this.props.currentTab === tabName)) ? 1 : 0.7;
        return (
          <div
            className="sidebar-tab"
            onClick={() => this.props.onTabChange(tabName)}
            style={{"opacity": tabHighlight}}
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