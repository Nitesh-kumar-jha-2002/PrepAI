# PrepAI 🚀

PrepAI is a production-ready AI Interview Preparation Platform built using the MERN stack. It helps users prepare for technical and HR interviews using AI-generated questions, resume analysis, intelligent feedback, and a modern SaaS-style SaaS experience.

🔗 Repository: [https://github.com/Nitesh-kumar-jha-2002/PrepAI](https://github.com/Nitesh-kumar-jha-2002/PrepAI)

---

## 🌟 Features

* 📄 Upload Resume (PDF)
* 🤖 AI-Generated Interview Questions
* 💼 Technical & HR Interview Practice
* 🧠 Intelligent AI Feedback
* 💳 Credit-Based Access System
* 💰 Razorpay Payment Integration
* 🔐 Firebase Google Authentication
* 🎨 Smooth UI Animations with Framer Motion
* ☁️ Full Stack Deployment Ready
* 📱 Fully Responsive Design

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Framer Motion
* Firebase Authentication

## Backend

* Node.js
* Express.js
* JWT Authentication

## Database

* MongoDB Atlas

## Payment Gateway

* Razorpay

## AI Integration

* OpenRouter API

## Deployment

* Render

---

# 📂 Folder Structure

```bash
PrepAI/
│
├── client/          # Frontend React App
├── server/          # Backend Express Server
├── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Nitesh-kumar-jha-2002/PrepAI.git
cd PrepAI
```

---

## 2️⃣ Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

# 🔑 Environment Variables

## Server `.env`

Create a `.env` file inside the `server` folder.

```env
PORT=8000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

---

## Client `.env`

Create a `.env` file inside the `client` folder.

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key

VITE_RAZORPAY_KEY_ID=your_razorpay_key
```

---

# ▶️ Run the Application

## Start Backend

```bash
cd server
npm run dev
```

## Start Frontend

```bash
cd client
npm run dev
```

---

# 💳 Razorpay Test Card

```text
Card Number: 4111 1111 1111 1111
Expiry: Any future date
CVV: 123
```

---

# 🚀 Deployment

This project can be deployed on:

* Frontend → Vercel / Render
* Backend → Render
* Database → MongoDB Atlas

---

# 🌐 Live Demo

🚀 Deployed on Render:

[https://prepai-d9v7.onrender.com/](https://prepai-d9v7.onrender.com/)

---

# 🎯 Key Learnings

* SaaS Application Architecture
* Authentication & Authorization
* Payment Gateway Integration
* AI Workflow Handling
* Backend API Structuring
* Production Deployment
* Full Stack Development

---

# 🔥 Future Improvements

* Real-Time Interview Sessions
* Interview Analytics Dashboard
* Resume Score System
* AI Career Recommendations
* Admin Dashboard

---

# 👨‍💻 Author

## Nitesh Kumar Jha

* GitHub: [https://github.com/Nitesh-kumar-jha-2002](https://github.com/Nitesh-kumar-jha-2002)

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub and share it with others.

---

# ⚠️ Security Notice

Never upload real `.env` files or API keys to GitHub.

If credentials are accidentally exposed:

* Regenerate MongoDB credentials
* Rotate JWT secret
* Regenerate OpenRouter API keys
* Regenerate Razorpay keys
* Remove secrets from Git history
