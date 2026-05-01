import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css'; 
import './App.css'; 

import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Search from './Components/Search';
import Booking from './Pages/Booking';
import ItineraryHeader from './Components/Itenary/ItineraryHeader';
import HotelSection from './Components/Itenary/HotelSection';
import TouristSection from './Components/Itenary/TouristSection';
import RestaurantSection from './Components/Itenary/RestaurantSection';

function App() {
  const [city, setCity] = useState('');

  const Home = () => (
    <>
      <ItineraryHeader city={city} setCity={setCity} />
      <div className="itinerary-grid">
        <HotelSection city={city} />
        <TouristSection city={city} />
        <RestaurantSection city={city} />
      </div>
    </>
  );

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <p>© 2026 TotalNomad | Your Personal Journey Planner</p>
      </footer>
    </div>
  );
}

export default App;