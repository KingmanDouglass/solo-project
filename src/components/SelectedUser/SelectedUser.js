import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatKit from '../ChatKit/ChatMaster'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
class SelectedUser extends Component {

  

// componentDidMount = () => {
//   this.props.dispatch({ type: 'GET_CURRENT_ID' });
// }

conditionalRender = () => {
  if (this.props.currentIdReducer && this.props.currentIdReducer.length === 100) {
    console.log('what about here?');
    
      return <div><p>test</p></div>;
  }
  else {
    console.log('did i make it here?');
    
    return (
    <div>{this.props.reduxState.currentIdReducer.map(tattoo =>
    <div>
    <p>Name: {tattoo.username}</p>
    <p>Description: {tattoo.description}</p>
    <p>Email: {tattoo.email}</p>
    <p>Placement: {tattoo.areas}</p>
    <p>Ideal Timeframe: {tattoo.ideal_timeframe}</p>
    <p>Appointment: {tattoo.name}</p>
    <p>Status: {tattoo.status}</p>
    </div>
    )}</div>)
  }
}

// conditionalRender = () => {
//   if (this.props.currentIdReducer && this.props.currentIdReducer.length === 100) {
//     console.log('what about here?');
    
//       return <div><p>test</p></div>;
//   }
//   else {
//     console.log('did i make it here?');
    
//     return <div><p>ughhhh</p></div>;
//   }
// }

render() {

  const { classes } = this.props;
  return (
  <div>
  {/* {this.props.currentIdReducer.map(tattoo => */}
    <div className="clientInfo">
      {/* <p>Name: {tattoo.name}</p>
      <p>Description: {tattoo.description}</p>
      <p>Email: {tattoo.email}</p>
      <p>Placement: {tattoo.body_area}</p>
      <p>Ideal Timeframe: {tattoo.ideal_timeframe}</p>
      <p>Deposit: {tattoo.name}</p>
      <p>Appointment: {tattoo.name}</p> */}

      {this.conditionalRender()}

      {/* <p>Name: </p>
      <p>Description: </p>
      <p>Email: </p>
      <p>Placement: </p>
      <p>Ideal Timeframe: </p>
      <p>Deposit: </p>
      <p>Appointment: </p> */}



    </div>
     {/* )} */}
    {/* <div className="clientPhotos">
        INSERT PHOTOS HERE
    </div> */}
    <ChatKit/>
  </div>
)}};

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(SelectedUser);