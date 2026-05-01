import React from 'react';

const TouristSection = ({ city }) => {
  const spots = [
    { id: 1, name: "City Landmark Park", category: "Nature & History", rating: 5, img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=300&q=80" },
    { id: 2, name: "Modern Art Gallery", category: "Culture", rating: 4, img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=300&q=80" }
  ];

  const handleTourClick = (name) => {
    alert(`🎡 Useful Feature: Fetching entry fees and local weather for ${name}. \n\nRecommended time to visit: 10:00 AM (Low Crowds).`);
  };

  return (
    <div className="itinerary-section">
      <h3>🎡 Attractions {city && `in ${city}`}</h3>
      <div className="card-container">
        {spots.map(spot => (
          <div key={spot.id} className="item-card" onClick={() => handleTourClick(spot.name)}>
            <span className="quick-view-badge">Tour Info</span>
            <div className="card-img-container">
              <img src={spot.img} alt={spot.name} className="card-image" />
            </div>
            <strong>{spot.name}</strong>
            <p style={{ fontSize: '0.85rem', color: '#666' }}>{spot.category}</p>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`star ${i < spot.rating ? 'filled' : ''}`}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristSection;