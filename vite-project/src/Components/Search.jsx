import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  { id: 1, name: "Goa", type: "Beach", rating: 4.8, img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500" },
  { id: 2, name: "Jaipur", type: "Culture", rating: 4.7, img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500" },
  { id: 3, name: "Kerala", type: "Nature", rating: 4.9, img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500" },
  { id: 4, name: "Manali", type: "Mountains", rating: 4.6, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500" },
  { id: 5, name: "Udaipur", type: "Romance", rating: 4.9, img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=500" },
  { id: 6, name: "Agra", type: "History", rating: 4.5, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=500" }
];

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Beach', 'Culture', 'Nature', 'Mountains'];

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || dest.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="itinerary-section" style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: 'var(--theme-dark)' }}>Explore Destinations</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>Find your next perfect getaway.</p>
        
        <input 
          type="text" 
          placeholder="Search destinations..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '500px',
            padding: '15px 20px',
            fontSize: '1.1rem',
            borderRadius: '30px',
            border: '2px solid var(--main-theme)',
            outline: 'none',
            marginTop: '20px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                backgroundColor: activeFilter === filter ? 'var(--main-theme)' : '#eee',
                color: activeFilter === filter ? 'white' : '#555',
                transition: 'all 0.2s'
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="card-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map(dest => (
            <div key={dest.id} className="item-card" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'} onClick={() => navigate('/')}>
              <div className="card-img-container" style={{ height: '200px' }}>
                <img src={dest.img} alt={dest.name} className="card-image" style={{ objectFit: 'cover', height: '100%' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <strong style={{ fontSize: '1.2rem' }}>{dest.name}</strong>
                <span style={{ backgroundColor: 'var(--theme-light)', color: 'var(--main-theme)', padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>★ {dest.rating}</span>
              </div>
              <p style={{ color: '#666', marginTop: '5px' }}>{dest.type}</p>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px', color: '#999' }}>
            <h2>No destinations found</h2>
            <p>Try a different search term or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;