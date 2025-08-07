import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import worldMap from '../../assets/world-map.png';

/*
 * TheBergWorldMapScreen displays an interactive world map adorned with pins
 * representing the locations submitted by users. It supports basic
 * zooming and full‑screen toggling. The coordinates for each pin are
 * derived deterministically from the location string to avoid the
 * overhead of a geocoding API. Counts of countries, states/provinces
 * and hometowns update automatically when the underlying data changes.
 */
export const TheBergWorldMapScreen = () => {
  const [locations, setLocations] = useState([]);
  const [mapScale, setMapScale] = useState(1);
  const [mapMaximized, setMapMaximized] = useState(false);

  // Load entries from localStorage on mount. If parsing fails the
  // locations array remains empty. Only non‑empty locations are
  // considered when rendering pins and computing counts.
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('bergLocations') || '[]');
      if (Array.isArray(stored)) {
        setLocations(stored);
      }
    } catch (e) {
      // ignore parse errors
    }
  }, []);

  // Derive counts of unique countries, states/provinces and hometowns.
  const parseLocationParts = (loc) => {
    return (loc || '')
      .split(',')
      .map((p) => p.trim())
      .filter((p) => p.length > 0);
  };
  const parseCountry = (loc) => {
    const parts = parseLocationParts(loc);
    return parts[parts.length - 1] || '';
  };
  const parseState = (loc) => {
    const parts = parseLocationParts(loc);
    return parts.length >= 2 ? parts[parts.length - 2] : parts[0] || '';
  };
  const countriesCount = locations.length
    ? new Set(locations.map((l) => parseCountry(l.location))).size
    : 0;
  const statesCount = locations.length
    ? new Set(locations.map((l) => parseState(l.location))).size
    : 0;
  const hometownCount = locations.length
    ? new Set(locations.map((l) => (l.location || '').trim())).size
    : 0;

  // Assign a pseudo‑random coordinate within the map area for each
  // location. The algorithm produces values in the range [10,90] for x
  // and [10,70] for y to keep pins within visible bounds. If the
  // location is empty the pin will not be shown.
  const getCoordinateForLocation = (loc) => {
    const clean = (loc || '').toLowerCase().trim();
    let hash = 0;
    for (let i = 0; i < clean.length; i++) {
      hash = (hash << 5) - hash + clean.charCodeAt(i);
      hash &= hash; // convert to 32bit integer
    }
    const x = 10 + (Math.abs(hash) % 80);
    const y = 10 + (Math.abs(hash >> 3) % 60);
    return { x, y };
  };

  // Zoom controls adjust the mapScale within sensible bounds. The
  // increments/decrements provide a noticeable but not jarring change.
  const handleZoomIn = () => setMapScale((s) => Math.min(3, parseFloat((s + 0.2).toFixed(2))));
  const handleZoomOut = () => setMapScale((s) => Math.max(0.5, parseFloat((s - 0.2).toFixed(2))));
  const toggleMaximize = () => setMapMaximized((m) => !m);

  return (
    <div
      className={`world-map-screen${mapMaximized ? ' maximized' : ''}`}
      style={{ padding: '1rem' }}
    >
      {/* Back link to return to Screen14. This retains the original
          behaviour of the back button in the WTBI design. */}
      <div style={{ marginBottom: '0.5rem' }}>
        <Link to="/the-berg-2" className="back-button">
          &larr; Back
        </Link>
      </div>
      {/* Map controls for zooming and full‑screen. Controls are placed
          above the map to avoid obstructing the image. */}
      <div className="map-controls">
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={toggleMaximize}>{mapMaximized ? 'Minimise Map' : 'Maximise Map'}</button>
      </div>
      {/* Container for the map image and pins. The transform is
          applied to the container so the pins scale along with the
          image. */}
      <div
        className="map-container"
        style={{
          transform: `scale(${mapScale})`,
          transformOrigin: 'center center',
          margin: mapMaximized ? '0 auto' : '1rem auto',
        }}
      >
        <img
          src={worldMap}
          alt="World map"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        {locations
          .filter((entry) => entry.location && entry.location.trim().length > 0)
          .map((entry, idx) => {
            const { x, y } = getCoordinateForLocation(entry.location);
            return (
              <div
                key={idx}
                className="pin"
                title={entry.location}
                style={{ left: `${x}%`, top: `${y}%` }}
              />
            );
          })}
      </div>
      {/* Display of counts summarising the geographic diversity. */}
      <div className="counts">
        <p><strong>{countriesCount}</strong> countries represented</p>
        <p><strong>{statesCount}</strong> states &amp; provinces represented</p>
        <p><strong>{hometownCount}</strong> unique hometowns</p>
      </div>
    </div>
  );
};