import React, { Component } from 'react';

import 'styles/codeEditor.scss';

export default class CodeEditor extends Component {
  render() {
    return (
      <div className="code-editor">
        <div>Pipeline code</div>
        <button className='button'>Copy to clipboard</button>
      </div>
    );
  }
}
