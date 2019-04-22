import React from 'react';
import {Link} from 'react-router-dom';
import googleMap from './map.png'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Location = () => (
  <div>
    <div className="location">
      <p>
      Bee Ink Location
With us being an appointment only studio, we do not accept walk ins unless specified. However, you can stop by and to check out our portfolios and say hello! 
      </p>
      <img src={googleMap} alt="googleMap" />
      <br/>
      <Link target="_blank" href="https://www.google.com/maps/dir//713+S+10th+St,+Minneapolis,+MN+55404/@44.9692448,-93.3340066,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x52b332a16d605e7b:0x560d8741100676b0!2m2!1d-93.2639668!2d44.9692662">Get Directions</Link>
    </div>
  </div>
);

export default Location;
