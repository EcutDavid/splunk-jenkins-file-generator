import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';

import 'styles/main.scss';

export class Main extends React.Component {
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
        <div className='container'>
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
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const ConnectedMain = connect(mapStateToProps, actions)(Main);
export default ConnectedMain;
