import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './style.css';

/*
 * TheBergWorldMap component implements a simple form where users can
 * enter their job title, name and location. When the "Add me in!"
 * button is pressed the values are appended to an array stored in
 * localStorage under the key "bergLocations". After successfully
 * storing the entry the user is redirected back to the interactive
 * world map page. A cancel/back link is provided for convenience.
 */
export const TheBergWorldMap = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [userName, setUserName] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const navigate = useNavigate();

  // Append a new entry to the list of saved locations. If no array
  // exists yet it is created on the fly. Empty location values are
  // ignored to avoid blank pins on the map.
  const handleAddMeIn = () => {
    const entry = {
      jobTitle: jobTitle.trim(),
      name: userName.trim(),
      location: userLocation.trim(),
    };
    if (entry.location) {
      try {
        const existing = JSON.parse(localStorage.getItem('bergLocations') || '[]');
        if (Array.isArray(existing)) {
          existing.push(entry);
          localStorage.setItem('bergLocations', JSON.stringify(existing));
        } else {
          localStorage.setItem('bergLocations', JSON.stringify([entry]));
        }
      } catch (e) {
        // fall back to overwriting if parsing fails
        localStorage.setItem('bergLocations', JSON.stringify([entry]));
      }
    }
    // Redirect back to the map page to view the new pin
    navigate('/the-berg-world-map');
  };

  return (
    <div className="berg-world-map-form" style={{ padding: '2rem' }}>
      <h2>Add yourself to the map</h2>
      <p>Please provide your details below. Your city/state/country will be used to position a pin on the world map.</p>
      <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px' }}>
        <label>
          Job title:
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="e.g. Software Engineer"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Your name"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </label>
        <label>
          Location (City, State, Country):
          <input
            type="text"
            value={userLocation}
            onChange={(e) => setUserLocation(e.target.value)}
            placeholder="e.g. Austin, Texas, USA"
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </label>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button onClick={handleAddMeIn} style={{ padding: '0.5rem 1rem' }}>Add me in!</button>
          <Link to="/the-berg-world-map" style={{ alignSelf: 'center', textDecoration: 'underline' }}>Cancel</Link>
        </div>
      </div>
    </div>
  );
};