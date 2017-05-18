import React, { Component } from 'react';

import 'styles/pipelineEditor.scss';

export default class Editor extends Component {
  constructor() {
    super();
    this.state = {
      utSection: {
        enabled: false
      },
      postBuildSection: {
        enabled: false
      }
    };
  }

  toggleSection(sectionName) {
    const section = this.state[sectionName];
    section.enabled = !section.enabled;

    this.setState({...this.state, [sectionName]: section});
  }

  render() {
    const {
      utSection: { enabled: utEnabled },
      postBuildSection: { enabled: postEnabled }
    } = this.state;

    return (
      <div className='pipeline-editor'>
        <div className='config-block'>
          <section
            className='title'
            onClick={this.toggleSection.bind(this, 'utSection')}
          >
            <input checked={utEnabled} type='checkbox' />
            <h6>UT/Coverage</h6>
          </section>
          <p>Docker Image</p>
          <input disabled={!utEnabled} type='text' />
          <p>Entry Script</p>
          <input disabled={!utEnabled} type='text' />
          <p>Output Folder</p>
          <input disabled={!utEnabled} type='text' />
          <input disabled={!utEnabled} type='checkbox' />
          <span>Collect Test Results</span>
          <br />
          <input disabled={!utEnabled} type='checkbox' />
          <span>Collect Coverage Results</span>
        </div>

        <div className='config-block'>
          <section className='title'>
            <h6>Build Package</h6>
          </section>
          <p>Docker Image</p>
          <input  type='text' />
          <p>Entry Script</p>
          <input type='text' />
          <p>Output Folder</p>
          <input type='text' />
        </div>

        <div className='config-block'>
          <section
            className='title'
            onClick={this.toggleSection.bind(this, 'postBuildSection')}
          >
            <input checked={postEnabled} type='checkbox' />
            <h6>Post Build Test(QA Test)</h6>
          </section>
          <p>Docker Image</p>
          <input disabled={!postEnabled} type='text' />
          <p>Entry Script</p>
          <input disabled={!postEnabled} type='text' />
          <p>Output Folder</p>
          <input disabled={!postEnabled} type='text' />
          <input disabled={!postEnabled} type='checkbox' />
          <span>Provision Splunk</span>
          <div className='provision-group'>
            <span>Splunk version</span>
            <select disabled={!postEnabled} value='value2'>
              <option value='value1'>6.6</option>
              <option value='value2'>6.5</option>
              <option value='value3'>6.4</option>
            </select>
            <br />
            <span>Type</span>
            <select disabled={!postEnabled} value='value2'>
              <option value='value1'>Single Instance</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
