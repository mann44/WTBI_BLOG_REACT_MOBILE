import React from 'react';
import { Link } from 'react-router-dom';

/*
 * Screen14 serves as the home page in this simplified project. In the
 * original WTBI design it corresponds to a landing screen with
 * navigation into subsequent pages. Here we provide links to the
 * interactive world map and to the form for adding a new entry. When
 * integrating into the existing code base you can replace this
 * implementation with the actual Screen14 layout.
 */
const Screen14 = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to WTBI World Map</h1>
      <p>
        This sample home page demonstrates the navigation flow between the
        calendar (Screen12), world map, and form pages. In your real
        application this would be replaced with the proper Screen14
        markup.
      </p>
      <nav style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Link to="/the-berg-world-map">Go to World Map</Link>
        <Link to="/the-berg-world-map-1">Add your location</Link>
      </nav>
    </div>
  );
};

export default Screen14;