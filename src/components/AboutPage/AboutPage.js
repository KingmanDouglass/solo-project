import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div className="aboutPage">
      <p>
      Opie started his tattoo career in Southern California around 1995. Ever since then he has been traveling and working all over the country,allowing him to work with some of the best in the industry. Opie likes to focus on bold traditional tattoos and black work nature themed pieces.
      </p>
    </div>
  </div>
);

export default AboutPage;
