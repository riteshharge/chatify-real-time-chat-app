<h1 align="center">✨ Full-Stack Chat App ✨</h1>

<p align="center">
  🔗 <a href="https://chatify.app"><b>Live Demo</b></a> •  
  📁 <a href="https://github.com/username/repo"><b>GitHub Repo</b></a>
</p>

---

# 📸 Screenshots

### 🔐 Login Page

<img src="screenshots/login.png" width="750" />

### 💬 Chat Interface

<img src="screenshots/chat.png" width="750" />

### 👤 Profile Image Update

<img src="screenshots/profile.png" width="750" />

---

# 🚀 Features

- 🔐 **Custom JWT Authentication**
- ⚡ **Real-time Messaging (Socket.io)**
- 🟢 **Online / Offline Presence**
- 🔔 **Typing & Notification Sounds (toggle support)**
- 🗂️ **Cloudinary Image Uploads**
- 🧱 **MongoDB + Mongoose**
- 🧰 **Express REST API**
- 🚦 **Arcjet Rate-Limiting**
- 🎨 **React + Tailwind CSS + DaisyUI UI**
- 🧠 **Zustand State Management**
- 🌐 **Deployment via Render**

---

# 🧪 `.env` Setup

## Backend (`/backend`)

```bash
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
```

🔧 Run the Backend
cd backend
npm install
npm run dev

💻 Run the Frontend
cd frontend
npm install
npm run dev
