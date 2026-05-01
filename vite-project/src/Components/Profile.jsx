import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  // 1. State for managing the user's name
  const [userName, setUserName] = useState('Anvesha');
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(userName);

  // 2. Function to save the new name
  const handleSave = () => {
    if (tempName.trim() !== "") {
      setUserName(tempName);
      setIsEditing(false);
    }
  };

  return (
    <div className="itinerary-grid" style={{ maxWidth: '900px', margin: '40px auto', display: 'flex', gap: '30px' }}>
      
      {/* Left Column: User Profile Card */}
      <div className="itinerary-section" style={{ flex: '1', textAlign: 'center', padding: '30px' }}>
        <div style={{ 
          width: '100px', 
          height: '100px', 
          borderRadius: '50%', 
          background: 'var(--theme-light)', 
          margin: '0 auto 20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: '2.5rem',
          border: '2px solid var(--main-theme)'
        }}>
          👤
        </div>

        {/* Editing Logic */}
        {isEditing ? (
          <div style={{ marginBottom: '15px' }}>
            <input 
              type="text" 
              value={tempName} 
              onChange={(e) => setTempName(e.target.value)}
              style={{ 
                padding: '8px', 
                borderRadius: '5px', 
                border: `2px solid var(--main-theme)`, 
                outline: 'none',
                width: '80%',
                textAlign: 'center'
              }}
            />
            <div style={{ marginTop: '10px' }}>
              <button onClick={handleSave} style={{ background: 'var(--main-theme)', color: 'white', border: 'none', padding: '6px 15px', borderRadius: '5px', cursor: 'pointer', marginRight: '5px' }}>Save</button>
              <button onClick={() => setIsEditing(false)} style={{ background: '#eee', border: 'none', padding: '6px 15px', borderRadius: '5px', cursor: 'pointer' }}>Cancel</button>
            </div>
          </div>
        ) : (
          <div style={{ marginBottom: '15px' }}>
            <h2 style={{ color: 'var(--theme-dark)', margin: '0', display: 'inline-block' }}>{userName}</h2>
            <button 
              onClick={() => setIsEditing(true)} 
              style={{ background: 'none', border: 'none', color: 'var(--main-theme)', cursor: 'pointer', fontSize: '1rem', marginLeft: '10px' }}
              title="Edit Name"
            >
              ✎
            </button>
          </div>
        )}

        <p style={{ color: '#666', fontSize: '0.9rem' }}>Traveler since 2026</p>
        
        <div style={{ marginTop: '30px' }}>
          <button onClick={() => navigate('/booking')} className="item-card" style={{ width: '100%', marginBottom: '10px', textAlign: 'left', border: 'none', cursor: 'pointer' }}>📑 My Bookings</button>
          <button className="item-card" style={{ width: '100%', marginBottom: '10px', textAlign: 'left', border: 'none' }}>❤️ Wishlist</button>
          <button className="item-card" style={{ width: '100%', textAlign: 'left', background: '#fff0f0', color: '#d32f2f', border: 'none' }}>Logout</button>
        </div>
      </div>

      {/* Right Column: Statistics */}
      <div className="itinerary-section" style={{ flex: '1.5', padding: '30px' }}>
        <h3 style={{ color: 'var(--theme-dark)', marginBottom: '20px' }}>Travel Statistics</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div className="item-card">
            <p style={{ color: '#666', margin: '0' }}>Places Visited</p>
            <h3 style={{ color: 'var(--main-theme)', margin: '10px 0' }}>12 Cities</h3>
          </div>
          <div className="item-card">
            <p style={{ color: '#666', margin: '0' }}>Total Trips</p>
            <h3 style={{ color: 'var(--main-theme)', margin: '10px 0' }}>8</h3>
          </div>
        </div>
        
        <div className="item-card" style={{ marginTop: '20px' }}>
          <p style={{ color: '#666', margin: '0 0 10px 0' }}>Travel Level: **Intermediate**</p>
          <div style={{ width: '100%', height: '8px', background: '#eee', borderRadius: '4px' }}>
            <div style={{ width: '65%', height: '100%', background: 'var(--main-theme)', borderRadius: '4px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;