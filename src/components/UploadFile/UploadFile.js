import React, { Component } from 'react';

import RawInputField from '../RawInputField/RawInputField';


class UploadFile extends Component {
  render() {
    return (
      <div className="container">
        <div className="uploads-container">
        <br/>
          {/* <h3>Upload Reference Photo</h3> */}
          <RawInputField />
        </div>
        <div className="images-container">
        </div>
      </div>
    );
  }
}
export default UploadFile;