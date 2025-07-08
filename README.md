# MERN Authentication Project

This is a full-stack authentication project built with the MERN stack (MongoDB, Express.js, React, Node.js). It supports user registration, login, email verification, password reset, and JWT-based authentication.

## Features

- User registration and login
- JWT authentication with HTTP-only cookies
- Email verification with OTP
- Password reset with OTP
- Responsive React frontend with Tailwind CSS
- MongoDB for data storage

## Project Structure

```
client/   # React frontend
server/   # Node.js/Express backend
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Environment Variables

#### Server (`server/.env`)

```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development

SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_pass
SENDER_EMAIL=your_sender_email
```

#### Client (`client/.env`)

```
VITE_BACKEND_URL=http://localhost:4000
```

### Installation

#### Backend

```sh
cd server
npm install
npm run server
```

#### Frontend

```sh
cd client
npm install
npm run dev
```

### Usage

- Visit the frontend at `http://localhost:5173`
- Register a new account, verify your email, and log in

## Scripts

### Server

- `npm run server` — Start backend with nodemon
- `npm start` — Start backend with node

### Client

- `npm run dev` — Start frontend development server
- `npm run build` — Build frontend for production


---

**Author:** [SKSHAM KAUSHAL]
