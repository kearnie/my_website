import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    currentTab: this.props.currentTab,
  }

  updateTab = (tabName) => {
    this.setState({currentTab: tabName});
  }

  renderTab(tabName) {
    return (
      <div 
        className="sidebar-tab"
        onClick={this.updateTab}
      >
        {tabName}
      </div>
    );
  }

  render() {
    const tabs = this.props.tabs.map(this.renderTab)
    return (
      <div className="sidebar">
        {tabs}
      </div>
    );
  }
}

export default Tab;