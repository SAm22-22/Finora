# 📈 Finora - MERN Stack Trading Platform

Finora is a full-stack Zerodha-inspired stock trading platform built using the MERN stack. It provides secure user authentication, stock BUY/SELL functionality, real-time portfolio management, and a responsive trading dashboard.

---

## 🚀 Live Demo

🌐 **Frontend:** https://finora-eight-psi.vercel.app/

---

## ✨ Features

- 🔐 Secure JWT Authentication (Login & Signup)
- 📊 Interactive Trading Dashboard
- 💹 Buy & Sell Stocks
- 📈 Dynamic Holdings Management
- 📉 Real-time Positions Tracking
- 💰 Funds & Margin Management
- 🔄 Automatic Portfolio Updates
- 📱 Fully Responsive Design
- ⚡ Fast and Modern UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Material UI
- CSS3

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt.js

### Database
- MongoDB
- Mongoose

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📂 Project Structure

```
Finora
│
├── frontend/
│   ├── Landing Page
│   ├── Authentication
│   └── React Components
│
├── dashboard/
│   ├── Holdings
│   ├── Positions
│   ├── Orders
│   ├── Funds
│   └── Watchlist
│
└── backend/
    ├── Express Server
    ├── Authentication APIs
    ├── Portfolio APIs
    └── MongoDB Models
```

---

## 📸 Screenshots

> *(You can add screenshots here later.)*

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/SAm22-22/Finora.git
```

### Install Dependencies

#### Frontend

```bash
cd frontend
npm install
npm start
```

#### Dashboard

```bash
cd dashboard
npm install
npm start
```

#### Backend

```bash
cd backend
npm install
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file inside the frontend:

```env
REACT_APP_API_URL=https://finora-havs.onrender.com
REACT_APP_DASHBOARD_URL=https://finora-eight-psi.vercel.app
```

Create a `.env` file inside the dashboard:

```env
REACT_APP_API_URL=https://finora-havs.onrender.com
REACT_APP_FRONTEND_URL=https://finora-eight-psi.vercel.app
```

Create a `.env` file inside the backend:

```env
MONGO_URL=YOUR_MONGODB_URL
JWT_SECRET=YOUR_SECRET_KEY
JWT_EXPIRES=7d
PORT=8080
```

---

## 📌 Future Improvements

- 📊 Live Stock Market API
- 📈 Interactive Charts
- 🔔 Price Alerts
- ⭐ Wishlist
- 📱 Progressive Web App (PWA)
- 🌙 Dark & Light Theme

---

## 👨‍💻 Developer

**Sameer Shaikh**

- GitHub: https://github.com/SAm22-22

---

## ⭐ Support

If you like this project, please give it a ⭐ on GitHub.
