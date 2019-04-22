import React from 'react';
import ChatKit from '../ChatKit/ChatMaster'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div className="clientInfo">
      <p>Name: </p>
      <p>Description: </p>
      <p>Email: </p>
      <p>Placement: </p>
      <p>Ideal Timeframe: </p>
      <p>Deposit: </p>
      <p>Appointment: </p>
    </div>
    <div className="clientPhotos">
        INSERT PHOTOS HERE
    </div>
    <ChatKit/>
  </div>
);

export default AboutPage;
