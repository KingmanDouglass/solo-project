import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatKit from '../ChatKit/ChatMaster'

class PendingAppointment extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_CURRENT_USER', payload: this.props.reduxState.user.id });
  }
  
  render() {
  
    const { classes } = this.props;
    return (
    <div>
      <div className="clientInfo">
  
  <div>{this.props.reduxState.currentUserReducer.map(tattoo =>
      <div>
      <p>Name: {tattoo.username}</p>
      <p>Description: {tattoo.description}</p>
      <p>Email: {tattoo.email}</p>
      <p>Placement: {tattoo.areas}</p>
      <p>Ideal Timeframe: {tattoo.ideal_timeframe}</p>
      <p>Appointment: {tattoo.name}</p>
      <p>Status: {tattoo.status}</p>
      </div>
      )}</div>
  
      </div>
      <ChatKit/>
    </div>
  )}};
  
  const mapReduxStateToProps = (reduxState) => ({
      reduxState
      });
  
  export default connect(mapReduxStateToProps)(PendingAppointment);