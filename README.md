# Shorty - A Modern URL Shortener 🚀

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

### 1. Root Overview 📁
The project is split into two main standalone directories:
```text
Shorty_url/
├── BACKEND/          # Node.js & Express server logic
├── FRONTEND/         # React.js client-side application
├── .DS_Store         # System configuration files
└── README.md         # Project documentation
```
### 2. Backend Architecture (Node.js/Express) ⚙️
A highly organized structure following enterprise-level separation of concerns.

```
BACKEND/
├── src/
│   ├── config/      # Database (MongoDB) & App settings
│   ├── controller/  # Handles incoming requests (Auth, User, URL)
│   ├── dao/         # Data Access Objects (Direct DB operations)
│   ├── middleware/  # JWT & Security check logic
│   ├── models/      # Mongoose Schemas (User & ShortURL)
│   ├── routes/      # Express API route definitions
│   ├── services/    # Business logic (Processes data for controllers)
│   └── utils/       # Error handlers & Try-Catch wrappers
├── app.js           # Server entry point
├── .env             # Environment variables (Private)
└── package.json     # Backend dependencies
```
### 3. Frontend Architecture (React + Vite) ⚛️

Optimized for high performance and modern developer experience.

```
FRONTEND/
├── src/             # Application components and state logic
├── index.html       # Entry HTML file
├── vite.config.js   # Vite build tool configuration
├── package.json     # Frontend dependencies
└── eslint.config.js # Code quality configuration
```


### 🛠️ Tech StackLayer
```
| Layer | Technology |
| :--- | :--- |
| **Frontend** | React, Vite, JavaScript, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose ODM |
| **Security** | JSON Web Tokens (JWT), Custom Auth Middleware |
| **Patterns** | Controller-Service-DAO Design, Try-Catch Wrappers |
```
## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local or MongoDB Atlas instance)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Ankitarai27/Shorty_url.git](https://github.com/Ankitarai27/Shorty_url.git)
   cd Shorty_url
   ```
2. **Setup Backend:**

```Bash
cd BACKEND
npm install
# Create a .env file and add your MONGODB_URI and PORT
npm start
```
3. **Setup Frontend:**

```Bash
cd ../FRONTEND
npm install
npm run dev
```
Developed with ❤️ by Ankita Rai
