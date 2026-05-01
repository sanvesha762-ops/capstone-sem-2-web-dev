import React from 'react';

const Profile = () => {
  return (
    <div className="itinerary-grid" style={{ justifyContent: 'flex-start', maxWidth: '900px', margin: '0 auto' }}>
      {/* Left Side: Profile Info */}
      <div className="itinerary-section" style={{ flex: '0 0 300px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#ddd', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>👤</div>
          <h3>Anvesha</h3>
          <p style={{ color: 'gray', fontSize: '0.9rem' }}>Traveler since 2026</p>
        </div>
        <button className="item-card" style={{ width: '100%', border: 'none', textAlign: 'left', marginBottom: '10px' }}>📑 My Bookings</button>
        <button className="item-card" style={{ width: '100%', border: 'none', textAlign: 'left', marginBottom: '10px' }}>❤️ Wishlist</button>
        <button className="item-card" style={{ width: '100%', border: 'none', textAlign: 'left', background: '#f8d7da', color: '#721c24' }}>Logout</button>
      </div>

      {/* Right Side: Travel Stats */}
      <div className="itinerary-section">
        <h3>Travel Statistics</h3>
        <div className="card-container">
          <div className="item-card">
            <strong>Places Visited</strong>
            <p style={{ fontSize: '1.5rem', color: 'var(--main-theme)' }}>12 Cities</p>
          </div>
          <div className="item-card">
            <strong>Travel Level</strong>
            <p>Intermediate Explorer (Level 4)</p>
            <div style={{ width: '100%', height: '8px', background: '#eee', borderRadius: '4px', marginTop: '10px' }}>
              <div style={{ width: '60%', height: '100%', background: 'var(--main-theme)', borderRadius: '4px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;