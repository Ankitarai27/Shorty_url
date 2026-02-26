# 🚀 Shorty — A Modern URL Shortener 🔗✨

**Shorty** is a professional, full-stack URL shortening service designed for speed, security, and simplicity. It features a robust architecture with a dedicated backend and a modern React-based frontend.

---

## 🌟 Key Features
- **⚡ Fast Shortening:** Instantly convert long, complex URLs into clean, shareable links.
- **🔐 Secure Authentication:** User signup and login functionality to manage your personal links.
- **🛡️ Protected Routes:** Middleware-based security ensures only authorized users can access specific features.
- **📊 Professional Architecture:** Backend built with the Controller-Service-DAO pattern for maximum scalability.
- **🎨 Responsive UI:** A sleek, modern user interface built with React and Vite.

---

## 📂 Project Structure

### 1️⃣ Root Overview 📁
The project is split into two main standalone directories:
```text
Shorty_url/
├── 📂 BACKEND/       # The Brain (Node.js & Express)
├── 📂 FRONTEND/      # The Beauty (React.js + Vite)
├── 📄 .DS_Store      # System Config
└── 📄 README.md      # Project Map
```
### 2️⃣ Backend Architecture (Node.js/Express) ⚙️
A highly organized structure following enterprise-level separation of concerns.

```
BACKEND/
├── 📂 src/
│   ├── 📂 config/      # ⚙️ DB & App Configurations
│   ├── 📂 controller/  # 🎮 Request Handlers
│   ├── 📂 dao/         # 🗄️ Data Access Objects
│   ├── 📂 middleware/  # 🚧 Security Gates
│   ├── 📂 models/      # 📝 Mongoose Schemas
│   ├── 📂 routes/      # 🛣️ API Endpoints
│   ├── 📂 services/    # 🧠 Core Business Logic
│   └── 📂 utils/       # 🛠️ Global Helpers & Error Handlers
├── 🚀 app.js           # Server Entry Point
├── 🔑 .env             # Secret Environment Variables
└── 📦 package.json     # Backend Dependencies

```
### 3️⃣ Frontend Architecture (React + Vite) ⚛️

Optimized for high performance and modern developer experience.

```
FRONTEND/
├── 📂 src/             # 🧩 Components & State Logic
├── 📄 index.html       # 🏠 Main Entry Point
├── 📄 vite.config.js   # ⚡ Vite Configuration
├── 📦 package.json     # 🏗️ Frontend Dependencies
└── 📜 eslint.config.js # ✨ Code Quality Rules
```


## 🛠️ Tech Stack & Tools

| 🏗️ Layer | 💻 Technology |
| :--- | :--- |
| **🌐 Frontend** | `React` `Vite` `JavaScript` `Tailwind/CSS` |
| **🖥️ Backend** | `Node.js` `Express.js` |
| **💾 Database** | `MongoDB` with `Mongoose ODM` |
| **🔑 Security** | `JSON Web Tokens (JWT)` `Custom Auth Middleware` |
| **📐 Patterns** | `DAO Design` `Service Layer` `Try-Catch Wrappers` |

---
## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.x or higher 🚀)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas 🍃)

### 🛠️ Installation & Setup

1️⃣ **Clone the repository:**
   
   ```bash
   git clone [https://github.com/Ankitarai27/Shorty_url.git](https://github.com/Ankitarai27/Shorty_url.git)
   cd Shorty_url
   ```
2️⃣ **Setup Backend:**

   ```Bash
   cd BACKEND
   npm install
   # 💡 Don't forget to create your `.env` (see example below)
   npm start
   ```

   Example backend `.env` values:
   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   # MONGODB_URI is also supported as a fallback
   JWT_SECRET=<your_jwt_secret>
   APP_URL=http://localhost:5000/
   CORS_ORIGIN=http://localhost:5173,https://your-frontend.vercel.app
   ```

3️⃣ **Setup Frontend:**

   ```Bash
   cd ../FRONTEND
   npm install
   npm run dev
   ```
## 🤝 Contributing
- Love this project? Give it a ⭐! Contributions are welcome:

- Fork the repo 🍴

- Create your feature branch 🌿

- Commit your changes 💾

- Open a Pull Request 🚀
  
Developed with ❤️ by Ankita Rai
