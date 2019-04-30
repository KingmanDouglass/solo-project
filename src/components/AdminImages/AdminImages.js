import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AdminImages extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
    }
  }
  componentDidMount = () => {
    // this.getImagesForAdmin();
  }

// getImagesForAdmin = () => {
//   axios.get('api/post/admin/:id')
//   .then(response => {
//     this.setState({
//       images: response.data
//     })
//   })
//   .catch(error => {
//     console.log('Error getting images: ', error);
//   })
// }

//   render() {
//     return (
//       <div>
//         {this.state.images.map((image, index) => {
//           return (
//             <div key={index} className="post">
//               <img className="image" src={image.media_url} alt="post"/>
//               {
//                 (image.title !== null || image.content !== null) &&
//                   [<span key='a' className="title">Title: {image.title}  </span>,
//                   <span key='b' className="content">  Content: {image.content}</span>]
//               }  
//             </div>
//           )
//         })}
//       </div>
//     );
//   }
// }

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