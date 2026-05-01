const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// In-memory data
let hotels = [
  { id: 1, name: "The Oberoi Grand", price: 18500, rating: 5, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300" },
  { id: 2, name: "Taj Lake Palace", price: 24000, rating: 5, img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=300" },
  { id: 3, name: "Leela Palace", price: 22000, rating: 5, img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300" },
  { id: 4, name: "ITC Grand Chola", price: 15000, rating: 4, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300" }
];

let bookings = [
  { id: 101, hotel: "The Oberoi Grand", date: "May 15 - May 20", status: "Confirmed", price: "₹92,500" }
];

app.get('/api/hotels', (req, res) => {
  const city = req.query.city;
  // In a real app, you would filter by city
  res.json(hotels);
});

app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

app.post('/api/bookings', (req, res) => {
  const { hotelName, date, price } = req.body;
  if (!hotelName || !date || !price) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newBooking = {
    id: Date.now(),
    hotel: hotelName,
    date,
    status: 'Confirmed',
    price
  };

  bookings.push(newBooking);
  res.status(201).json(newBooking);
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
