import React, { Component } from 'react';
import { connect } from 'react-redux';


class AdminImages extends Component {

//when called render the images that are stored in the getIdReducer
//images are rendered by extracting the media_url code that comes from the media_key
render() {
    return (
      <div>
        {this.props.reduxState.getIdReducer.map((image, index) => {
          return (
            <div key={index} className="post">
              <img className="image" src={image.media_url} alt="post"/>
              {
                (image.title !== null || image.content !== null) &&
                  [<span key='a' className="title">Title: {image.title}  </span>,
                  <span key='b' className="content">  Content: {image.content}</span>]
              }  
            </div>
          )
        })}
      </div>
    );
  }
}

// export default AdminImages;



const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(AdminImages);