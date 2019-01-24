import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  renderTab(tabName) {
    return (
      <div className="sidebar-tab">
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