import React, { Component } from 'react';
import Header from './Header';

import 'styles/main.scss';
import PipelineEditor from './PipelineEditor';
import CodeEditor from './CodeEditor';

export default class Main extends Component {
  constructor() {
    super();
    this.state = { isPipelineMode: true };
  }

  changeEditorMode(isPipelineMode) {
    this.setState({ isPipelineMode });
  }

  render() {
    const { isPipelineMode } = this.state;

    return (
      <div className='index'>
        <Header />
        <div className='tab-selectors'>
          <span
            className={isPipelineMode ? 'selected' : ''}
            onClick={this.changeEditorMode.bind(this, true)}
          >
            Pipeline
          </span>
          <span
            className={isPipelineMode ? '' : 'selected'}
            onClick={this.changeEditorMode.bind(this, false)}
          >
            Code
          </span>
        </div>
        <div className='container'>
          {
            isPipelineMode ?
            <PipelineEditor
            /> :
            <CodeEditor
            />
          }
        </div>
      </div>
    );
  }
}
