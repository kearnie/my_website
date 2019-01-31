import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props);
  }

  renderAboutContent() {
    return (
      <div>
        this my about stuff
      </div>
    )
  }

  renderWorkContent() {
    return (
      <div>
        this my work stuff
      </div>
    )
  }

  renderDevContent() {
    return (
      <div>
        dev stuff!!
      </div>
    )
  }

  renderArtsContent() {
    return (
      <div>
        artsy fartsy
      </div>
    )
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