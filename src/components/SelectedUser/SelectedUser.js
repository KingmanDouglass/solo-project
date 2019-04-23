import React from 'react';
import ChatKit from '../ChatKit/ChatMaster'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const SelectedUser = () => (
  <div>
  {/* {this.props.tattooReduce.filter(tattoo => tattoo.id === Number(this.state.selection)).map(tattoo => */}
    <div className="clientInfo">
      {/* <p>Name: {tattoo.name}</p>
      <p>Description: {tattoo.description}</p>
      <p>Email: {tattoo.email}</p>
      <p>Placement: {tattoo.body_area}</p>
      <p>Ideal Timeframe: {tattoo.ideal_timeframe}</p>
      <p>Deposit: {tattoo.name}</p>
      <p>Appointment: {tattoo.name}</p> */}
    </div>
    <div className="clientPhotos">
        INSERT PHOTOS HERE
    </div>
    // ))}
    <ChatKit/>
  </div>
);

export default SelectedUser;
