import React, { useState, useEffect } from 'react';

const defaultHotels = [
  { id: 1, name: "The Oberoi Grand", price: 18500, rating: 5, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300" },
  { id: 2, name: "Taj Lake Palace", price: 24000, rating: 5, img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=300" },
  { id: 3, name: "Leela Palace", price: 22000, rating: 5, img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300" },
  { id: 4, name: "ITC Grand Chola", price: 15000, rating: 4, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300" }
];

const HotelSection = ({ city }) => {
  const [hotels, setHotels] = useState(defaultHotels);
  const [bookingStatus, setBookingStatus] = useState({});

  const handleBook = (hotel) => {
    // Basic date formatting for display
    const date = "May 15 - May 20"; 
    const priceStr = `₹${hotel.price.toLocaleString('en-IN')}`;
    
    const newBooking = {
      id: Date.now(),
      hotel: hotel.name,
      date: date,
      status: 'Confirmed',
      price: priceStr
    };

    const existingBookings = JSON.parse(localStorage.getItem('my_bookings')) || [
      { id: 101, hotel: "The Oberoi Grand", date: "May 15 - May 20", status: "Confirmed", price: "₹92,500" }
    ];
    
    localStorage.setItem('my_bookings', JSON.stringify([...existingBookings, newBooking]));

    setBookingStatus(prev => ({ ...prev, [hotel.id]: 'Booked!' }));
    setTimeout(() => {
      setBookingStatus(prev => ({ ...prev, [hotel.id]: null }));
    }, 3000);
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