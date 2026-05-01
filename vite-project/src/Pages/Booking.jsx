import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/bookings')
      .then(res => res.json())
      .then(data => setMyBookings(data))
      .catch(err => console.error('Error fetching bookings:', err));
  }, []);

  return (
    <div className="itinerary-section" style={{ maxWidth: '850px', margin: '40px auto', padding: '20px' }}>
      <button 
        onClick={() => navigate('/')} 
        style={{ background: 'none', border: 'none', color: 'var(--main-theme)', cursor: 'pointer', marginBottom: '20px', fontWeight: 'bold', fontSize: '1rem' }}
      >
        ← Back to Search
      </button>
      
      <h2 style={{ color: 'var(--theme-dark)', marginBottom: '25px' }}>✈️ My Bookings</h2>
      
      {myBookings.map(book => (
        <div key={book.id} className="item-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <div>
            <h4 style={{ margin: '0', fontSize: '1.2rem' }}>{book.hotel}</h4>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: '5px 0' }}>{book.date}</p>
            <span style={{ color: '#27ae60', fontWeight: 'bold' }}>● {book.status}</span>
          </div>
          <p style={{ fontWeight: 'bold', fontSize: '1.3rem', color: 'var(--theme-dark)' }}>{book.price}</p>
        </div>
      ))}
      
      {/* PURPLE THEMED EXPLORE MORE SECTION */}
      <div style={{ 
        marginTop: '50px', 
        padding: '40px', 
        background: 'var(--theme-light)', 
        borderRadius: '20px', 
        textAlign: 'center',
        border: '1px dashed var(--main-theme)'
      }}>
        <h3 style={{ margin: '0 0 12px 0', color: 'var(--theme-dark)' }}>Craving a new adventure?</h3>
        <p style={{ marginBottom: '25px', color: '#6a1b9a', opacity: 0.8 }}>Discover hidden gems and luxury stays across India.</p>
        
        <button 
          onClick={() => navigate('/')} 
          style={{ 
            background: 'var(--main-theme)', 
            color: 'white', 
            border: 'none', 
            padding: '16px 40px', 
            borderRadius: '12px', 
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            boxShadow: '0 6px 15px rgba(106, 27, 154, 0.3)',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          EXPLORE MORE
        </button>
      </div>
    </div>
  );
};

export default Booking;