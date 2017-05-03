import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';

import 'styles/main.scss';

export class Main extends React.Component {
  updateErrors(errors) {
    const { updateErrors } = this.props;
    updateErrors(errors);
  }

  render() {
    return (
      <div
        className='index'
      >
        <Header />
        <div className='container'>
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
