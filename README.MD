<h1 align="center">✨ Full-Stack Chat App ✨</h1>

<p align="center">
  🔗 <a href="https://chatify-real-time-chat-app-769d.onrender.com"><b>Live Demo</b></a> •  
  📁 <a href="https://github.com/riteshharge/chatify-real-time-chat-app"><b>GitHub Repo</b></a>
</p>

---

# 📸 Screenshots

### 🔐 Login Page

<img src="https://github.com/riteshharge/chatify-real-time-chat-app/blob/main/Screenshot/login.png.png?raw=true" width="750" />

### 💬 Chat Interface

<img src="https://github.com/riteshharge/chatify-real-time-chat-app/blob/main/Screenshot/chat.png.png?raw=true" width="750" />

### 👤 Profile Image Update

<img src="https://github.com/riteshharge/chatify-real-time-chat-app/blob/main/Screenshot/profile.png.png?raw=true" width="750" />

---

# 🚀 Features

- 🔐 **Custom JWT Authentication**
- ⚡ **Real-time Messaging (Socket.io)**
- 🟢 **Online / Offline Presence**
- 🔔 **Typing & Notification Sounds**
- 🗂️ **Cloudinary Image Uploads**
- 🧱 **MongoDB + Mongoose**
- 🧰 **Express REST API**
- 🚦 **Arcjet Rate-Limiting**
- 🎨 **React + Tailwind CSS + DaisyUI**
- 🧠 **Zustand State Management**
- 🌐 **Deployed on Render**

---

# 🧪 `.env` Setup (Local Development)

## Backend (`/backend`)

PORT=3000
MONGO_URI=your_mongo_uri_here
NODE_ENV=development

JWT_SECRET=your_jwt_secret

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development

## Frontend (`/frontend`)

VITE_BACKEND_URL=http://localhost:3000/api

---

### 📌 Note:

This setup works for **both cases**:

1. **When frontend and backend are deployed on the same domain** (e.g., `myapp.com` with backend served at `/api`)
2. **When frontend and backend are deployed on different domains** (e.g., frontend: `myapp.com`, backend: `api.myapp.com`)

Because the axios configuration automatically:

- Uses the URL from `VITE_BACKEND_URL` when provided
- Falls back to `/api` when deployed on the same domain

So the same codebase works in **local, same-domain production, and separate-domain production** without changes.

---

## 🛠 Run the Backend

```bash
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```
