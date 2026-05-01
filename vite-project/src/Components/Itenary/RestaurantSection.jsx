import React from 'react';

const RestaurantSection = ({ city }) => {
  const restaurants = [
    { id: 1, name: "The Ocean Grill", type: "Seafood & Grill", rating: 5, img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=300&q=80" },
    { id: 2, name: "Pasta Paradise", type: "Italian Kitchen", rating: 4, img: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&w=300&q=80" },
    { id: 3, name: "Spice Route", type: "Authentic Indian", rating: 5, img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=300&q=80" },
    { id: 4, name: "Zen Sushi Bar", type: "Japanese", rating: 4, img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80" }
  ];

  const handleReserve = (name) => {
    alert(`🍽️ Useful Feature: Opening table reservations for ${name}. \n\nSearching for available tables in ${city || 'your current location'}...`);
  };

  return (
    <div className="itinerary-section">
      <h3>🍽️ Restaurants {city && `in ${city}`}</h3>
      <div className="card-container">
        {restaurants.map(res => (
          <div key={res.id} className="item-card" onClick={() => handleReserve(res.name)}>
            <span className="quick-view-badge">Reserve Table</span>
            <div className="card-img-container">
              <img src={res.img} alt={res.name} className="card-image" />
            </div>
            <strong>{res.name}</strong>
            <p style={{ fontSize: '0.85rem', color: '#666' }}>{res.type}</p>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`star ${i < res.rating ? 'filled' : ''}`}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantSection;