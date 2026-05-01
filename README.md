# TotalNomad - Travel & Booking Platform

TotalNomad is a modern travel planner and booking application. It provides users with an intuitive interface to explore destinations, browse hotels, and make bookings seamlessly. 

## 🚀 Features
- **Dynamic Hotel Listings:** Fetch live data from a backend API.
- **Instant Bookings:** Users can book hotels with a single click, getting real-time visual feedback.
- **User Dashboard (Profile):** Displays a user's travel statistics and their dynamically updated list of booked hotels.
- **Modern UI:** Built with React, Vite, and CSS for a responsive, interactive experience.

## 🛠️ Technology Stack
- **Frontend:** React.js, Vite, React Router
- **Backend:** Node.js, Express.js
- **Database:** In-memory storage (easily upgradeable to MongoDB/PostgreSQL)

## 📂 Project Structure
- `/vite-project`: Contains the frontend React application.
- `/server`: Contains the Node.js/Express backend API.

## ⚙️ How to Run Locally

### 1. Start the Backend Server
Open your terminal and navigate to the backend directory:
```bash
cd server
npm install
npm run dev
```
The backend server will start on **http://localhost:4000**.

### 2. Start the Frontend Application
Open a new terminal window and navigate to the frontend directory:
```bash
cd vite-project
npm install
npm run dev
```
The frontend application will start on **http://localhost:5173**. 

Open `http://localhost:5173` in your browser to view the application!

## 📡 API Endpoints (Local)
- `GET /api/hotels` - Returns a list of available hotels.
- `GET /api/bookings` - Returns the list of all current bookings.
- `POST /api/bookings` - Creates a new booking. Requires `hotelName`, `date`, and `price` in the JSON body.
