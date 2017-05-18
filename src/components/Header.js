import React, { Component } from 'react';

import 'styles/header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Splunk Jenkins file generator</h1>
      </div>
    );
  }
}
