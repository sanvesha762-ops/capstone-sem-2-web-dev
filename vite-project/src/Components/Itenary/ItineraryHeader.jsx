import React from 'react';

const ItineraryHeader = ({ city, setCity }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h2>Plan Your Trip to {city || "..."}</h2>
      <input
        type="text"
        placeholder="Enter city (e.g. Kolkata, Kanpur)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '10px', width: '300px', borderRadius: '8px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default ItineraryHeader;