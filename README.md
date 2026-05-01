<div align="center">
  <h1>🌍 TotalNomad</h1>
  <p><strong>Your Personal Journey Planner & Booking Engine</strong></p>
</div>

<br />

TotalNomad is a modern, responsive travel planning and hotel booking platform. Designed with an intuitive interface, it allows travelers to explore stunning destinations, browse curated hotel listings, and make bookings seamlessly. 

---

## ✨ Key Features
- **Dynamic Hotel Exploration:** Browse beautifully presented hotel listings with live pricing and dynamic image loading.
- **One-Click Bookings:** Users can seamlessly book hotels with immediate visual feedback—no page reloads required.
- **Personalized Dashboard:** A customized profile section showcasing travel statistics (Cities Visited, Total Trips, Level) and a dynamically updated list of the user's latest bookings.
- **Modern UI/UX:** Built with React, Vite, and CSS variables for a vibrant, accessible, and highly responsive user experience.
- **Restful API Backend:** An Express.js server handles the data flow, booking mutations, and session states.

---

## 🛠️ Technology Stack
| Category | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, React Router, Custom CSS |
| **Backend** | Node.js, Express.js, CORS |
| **Data & Storage** | In-Memory (Easily scalable to MongoDB/PostgreSQL) |
| **Deployment** | Vercel (Frontend), GitHub Actions |

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js and npm installed on your local machine.

### 1. Start the Backend Server
The backend handles the APIs for fetching hotels and making bookings.

```bash
cd server
npm install
npm run dev
```
> The backend server will spin up on **http://localhost:4000**.

### 2. Start the Frontend Application
In a new terminal window, start the React application.

```bash
cd vite-project
npm install
npm run dev
```
> The frontend application will start on **http://localhost:5173**. Open this link in your browser to view the application!

---

## 📡 API Endpoints (Local Reference)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/hotels` | Returns a list of available hotels and properties. |
| `GET` | `/api/bookings` | Returns the list of all active user bookings. |
| `POST` | `/api/bookings` | Creates a new booking. Requires `hotelName`, `date`, and `price` in the JSON body. |

---

<div align="center">
  <p>Built with ❤️ for travelers everywhere.</p>
</div>
