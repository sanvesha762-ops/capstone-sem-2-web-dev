import React, { useState, useEffect } from 'react';

const HotelSection = ({ city }) => {
  const [hotels, setHotels] = useState([]);
  const [bookingStatus, setBookingStatus] = useState({});

  useEffect(() => {
    fetch('http://localhost:4000/api/hotels' + (city ? `?city=${city}` : ''))
      .then(res => res.json())
      .then(data => setHotels(data))
      .catch(err => console.error('Error fetching hotels:', err));
  }, [city]);

  const handleBook = (hotel) => {
    // Basic date formatting for display
    const date = "May 15 - May 20"; 
    const priceStr = `₹${hotel.price.toLocaleString('en-IN')}`;
    
    fetch('http://localhost:4000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hotelName: hotel.name,
        date: date,
        price: priceStr
      }),
    })
    .then(res => res.json())
    .then(data => {
      setBookingStatus(prev => ({ ...prev, [hotel.id]: 'Booked!' }));
      setTimeout(() => {
        setBookingStatus(prev => ({ ...prev, [hotel.id]: null }));
      }, 3000);
    })
    .catch(err => console.error('Error creating booking:', err));
  };

  return (
    <div className="itinerary-section">
      <h3>🏨 Hotels {city && `in ${city}`}</h3>
      <div className="card-container">
        {hotels.map(h => (
          <div key={h.id} className="item-card">
            <div className="card-img-container"><img src={h.img} alt={h.name} className="card-image" /></div>
            <strong>{h.name}</strong>
            <p>₹{h.price.toLocaleString('en-IN')} / night</p>
            <button 
              onClick={() => handleBook(h)}
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '10px',
                backgroundColor: bookingStatus[h.id] ? '#27ae60' : 'var(--main-theme)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              {bookingStatus[h.id] || 'Book Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelSection;