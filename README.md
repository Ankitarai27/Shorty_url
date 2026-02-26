# 🚀 Shorty URL — Full Project Documentation

A production-ready full-stack URL shortener with authentication, custom slugs, click analytics, protected routes, and deployment support (Render + Vercel).

---

## 📌 Table of Contents

1. [Project Vision](#-project-vision)
2. [What Makes This Project Unique](#-what-makes-this-project-unique)
3. [System Architecture](#-system-architecture)
4. [Repository Structure](#-repository-structure)
5. [Backend Deep Dive](#-backend-deep-dive)
   - [Entry and Global Middleware](#entry-and-global-middleware)
   - [Config Layer](#config-layer)
   - [Models Layer](#models-layer)
   - [DAO Layer](#dao-layer)
   - [Services Layer](#services-layer)
   - [Controllers Layer](#controllers-layer)
   - [Routes Layer](#routes-layer)
   - [Utilities Layer](#utilities-layer)
   - [Middleware Layer](#middleware-layer)
6. [Frontend Deep Dive](#-frontend-deep-dive)
   - [App Bootstrapping & Providers](#app-bootstrapping--providers)
   - [Routing System](#routing-system)
   - [State Management](#state-management)
   - [API Client Layer](#api-client-layer)
   - [Components](#components)
   - [Pages](#pages)
   - [Utility Logic](#utility-logic)
7. [Function-by-Function Reference](#-function-by-function-reference)
8. [Environment Variables](#-environment-variables)
9. [API Endpoints](#-api-endpoints)
10. [Run Locally](#-run-locally)
11. [Deployment Guide](#-deployment-guide)
12. [Troubleshooting](#-troubleshooting)
13. [Future Improvements](#-future-improvements)

---

## 🎯 Project Vision

Shorty URL is designed to be more than a basic short-link tool:
- easy for users (generate + copy + manage URLs)
- secure for production (JWT + cookies + helmet + rate-limits)
- maintainable for developers (Controller → Service → DAO architecture)
- deployment-friendly (Render/Vercel + CORS + health checks)

---

## ✨ What Makes This Project Unique

1. **Layered backend architecture (Controller-Service-DAO):** keeps business logic clean and testable.
2. **Auth-aware URL creation:** anonymous users can shorten links, logged-in users can save history.
3. **Custom slug normalization:** trims and lowercases user slugs, then collision-checks.
4. **Deployment-aware public URL generation:** prefers Render external URL fallback handling.
5. **Integrated operational diagnostics:** `/api/health` endpoint for quick deployment/domain verification.
6. **Modern frontend stack:** React + TanStack Router + React Query + Redux Toolkit.

---

## 🧭 System Architecture

```text
Frontend (React + Vite)
   │
   │ HTTP (Axios, credentials)
   ▼
Backend API (Express)
   ├── Auth endpoints
   ├── URL creation endpoints
   ├── User history endpoints
   └── Redirect endpoint /:id
          │
          ▼
MongoDB (Users + Short URLs)
```

---

## 📂 Repository Structure

```text
Shorty_url/
├── BACKEND/
│   ├── app.js
│   ├── package.json
│   └── src/
│       ├── config/
│       ├── controller/
│       ├── dao/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       ├── services/
│       └── utils/
├── FRONTEND/
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── api/
│       ├── components/
│       ├── pages/
│       ├── routing/
│       ├── store/
│       └── utils/
└── README.md
```

---

## 🔧 Backend Deep Dive

### Entry and Global Middleware

**File:** `BACKEND/app.js`

Responsibilities:
- initializes Express app
- enables `trust proxy` for hosted environments
- sets security middleware (`helmet`, `rateLimit`)
- configures dynamic CORS from env (`CORS_ORIGIN`)
- parses JSON/body/cookies
- attaches authenticated user when token is present
- mounts all route modules
- exposes health endpoint
- exposes redirect endpoint
- global error handling
- boots DB connection and starts server

### Config Layer

| File | Why it exists |
|---|---|
| `src/config/config.js` | Central cookie settings (`httpOnly`, `sameSite`, `secure`, expiry). |
| `src/config/monogo.config.js` | Mongo connection bootstrap with env fallback (`MONGO_URI` / `MONGODB_URI`). |

### Models Layer

| File | What it models | Key behavior |
|---|---|---|
| `src/models/user.model.js` | User account | Hashes password pre-save, compares password, hides password in JSON transform. |
| `src/models/short_url.model.js` | Short link | Stores full URL, short code, click count, optional owner user ref. |

### DAO Layer

| File | Purpose |
|---|---|
| `src/dao/user.dao.js` | All database read/write operations for users and user URL history. |
| `src/dao/short_url.js` | Persistence and retrieval for short link records + click increment. |

### Services Layer

| File | Business logic |
|---|---|
| `src/services/auth.service.js` | Register/login workflows, conflict checks, password verification, token generation. |
| `src/services/short_url.service.js` | Random short code creation, custom slug normalization, uniqueness checks. |

### Controllers Layer

| File | Controller concern |
|---|---|
| `src/controller/auth.controller.js` | HTTP request/response for auth routes + cookie set/clear. |
| `src/controller/short_url.controller.js` | Create short URL response payload + redirect by code + custom creation. |
| `src/controller/user.controller.js` | Return logged-in user URL history. |

### Routes Layer

| File | Endpoints registered |
|---|---|
| `src/routes/auth.routes.js` | register/login/logout/me |
| `src/routes/short_url.route.js` | create URL |
| `src/routes/user.routes.js` | user URL history |

### Utilities Layer

| File | Utility role |
|---|---|
| `src/utils/helper.js` | nanoid generation, JWT sign/verify helpers. |
| `src/utils/tryCatchWrapper.js` | async wrapper to forward errors to middleware. |
| `src/utils/errorHandler.js` | central error formatting for API responses. |
| `src/utils/attachUser.js` | attach user to request if access token cookie exists. |

### Middleware Layer

| File | Role |
|---|---|
| `src/middleware/auth.middleware.js` | strict route guard for authenticated-only endpoints. |

---

## 🎨 Frontend Deep Dive

### App Bootstrapping & Providers

**File:** `FRONTEND/src/main.jsx`
- creates React Query client
- initializes Redux store provider
- mounts TanStack Router provider

### Routing System

**Folder:** `FRONTEND/src/routing/`

| File | Purpose |
|---|---|
| `routeTree.js` | defines root route and composed route tree |
| `homepage.js` | route config for home page |
| `auth.route.js` | route config for auth page |
| `dashboard.js` | route config for dashboard |
| `history.js` | route config for history |

### State Management

| File | Purpose |
|---|---|
| `store/store.js` | Redux store configuration |
| `store/slice/authSlice.js` | auth state, login/logout actions |

### API Client Layer

| File | Role |
|---|---|
| `utils/axiosInstance.js` | central axios instance, base URL, credentials, response error normalization |
| `api/user.api.js` | auth/user related API calls |
| `api/shortUrl.api.js` | create short URL API call |

### Components

| File | Component responsibility |
|---|---|
| `components/NavBar.jsx` | top navigation + auth-aware actions |
| `components/LoginForm.jsx` | login form and submit behavior |
| `components/RegisterForm.jsx` | registration form and submit behavior |
| `components/UrlForm.jsx` | create URL form, custom slug input, copy result |
| `components/UserUrl.jsx` | history table, click count display, open/copy actions |

### Pages

| File | Page-level composition |
|---|---|
| `pages/HomePage.jsx` | public landing/home experience |
| `pages/AuthPage.jsx` | container for auth forms |
| `pages/DashboardPage.jsx` | main shortener workflow page |
| `pages/HistoryPage.jsx` | user’s created URLs and analytics |

### Utility Logic

| File | Purpose |
|---|---|
| `RootLayout.jsx` | shared layout shell for routed pages |
| `utils/helper.js` | route-level auth check helper (redirect unauthenticated users) |
| `index.css` | global styles |

---

## 🧠 Function-by-Function Reference

### Backend functions

#### `src/controller/short_url.controller.js`
- **`buildPublicShortUrl(shortUrl)`**
  - Builds full short link from env base URL.
  - Trims trailing slash to avoid malformed links.
- **`createShortUrl(req, res)`**
  - Determines whether user is logged in.
  - Uses appropriate service to generate slug.
  - Returns full short URL.
- **`redirectFromShortUrl(req, res)`**
  - Reads `:id` param, loads URL, increments click count through DAO, redirects to original URL.
- **`createCustomShortUrl(req, res)`**
  - Accepts slug in request and returns full custom short URL.

#### `src/services/short_url.service.js`
- **`createShortUrlWithoutUser(url, slug?)`**
  - For anonymous flow.
  - Normalizes optional slug (`trim + lowercase`).
  - Checks custom slug collision.
  - Persists URL.
- **`createShortUrlWithUser(url, userId, slug?)`**
  - Same as above but associates URL with a user.

#### `src/services/auth.service.js`
- **`registerUser(name, email, password)`**
  - Prevents duplicate email, creates user, signs JWT.
- **`loginUser(email, password)`**
  - Validates user and password, signs JWT.

#### `src/dao/short_url.js`
- **`saveShortUrl(shortUrl, longUrl, userId?)`**
  - Writes short URL record; throws conflict for duplicates.
- **`getShortUrl(shortUrl)`**
  - Finds by short code and increments clicks atomically.
- **`getCustomShortUrl(slug)`**
  - Checks if custom slug exists.

#### `src/dao/user.dao.js`
- **`findUserByEmail(email)`**
- **`findUserByEmailByPassword(email)`**
- **`findUserById(id)`**
- **`createUser(name, email, password)`**
- **`getAllUserUrlsDao(id)`**

All 5 functions isolate DB operations away from service/controller logic.

#### `src/utils/helper.js`
- **`generateNanoId(length = 7)`**: lowercase short code generator
- **`signToken(payload)`**: creates JWT
- **`verifyToken(token)`**: verifies token and returns user ID

#### `src/utils/attachUser.js`
- **`attachUser(req, res, next)`**
  - Reads cookie token, verifies user, attaches `req.user` if valid.

#### `src/middleware/auth.middleware.js`
- **`authMiddleware(req, res, next)`**
  - Hard-blocks access when user is not authenticated.

#### `src/controller/auth.controller.js`
- **`register_user`**: handles register endpoint + sets cookie
- **`login_user`**: handles login endpoint + sets cookie
- **`logout_user`**: clears auth cookie
- **`get_current_user`**: returns current user from request context

#### `src/controller/user.controller.js`
- **`getAllUserUrls`**: returns all URLs owned by authenticated user

### Frontend functions

#### `src/api/shortUrl.api.js`
- **`createShortUrl(url, slug)`**
  - Calls backend create endpoint and returns generated short URL string.

#### `src/api/user.api.js`
- **`loginUser(password, email)`**
- **`registerUser(name, password, email)`**
- **`logoutUser()`**
- **`getCurrentUser()`**
- **`getAllUserUrls()`**

These map 1:1 with backend auth/user endpoints.

#### `src/utils/helper.js`
- **`checkAuth({ context })`**
  - Route guard helper.
  - Fetches current user via React Query.
  - Syncs Redux state and redirects to auth when unauthenticated.

#### Component-local functions worth knowing
- `UrlForm.handleSubmit` / `UrlForm.handleCopy`
- `UserUrl.handleCopy`
- `LoginForm` and `RegisterForm` submit handlers

These orchestrate user UI flows and call API layer methods.

---

## 🔐 Environment Variables

### Backend (`BACKEND/.env`)

```env
PORT=5000
MONGO_URI=<mongo_connection_string>
# fallback if needed:
MONGODB_URI=<mongo_connection_string>

JWT_SECRET=<jwt_secret>
APP_URL=http://localhost:5000/
CORS_ORIGIN=http://localhost:5173,https://your-frontend.vercel.app
```

Optional (Render-injected commonly):
- `RENDER_EXTERNAL_URL`

### Frontend (Vercel or local `.env`)

```env
VITE_API_BASE_URL=http://localhost:5000
```

---

## 📡 API Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/api/health` | service health check |
| POST | `/api/auth/register` | register user |
| POST | `/api/auth/login` | login user |
| POST | `/api/auth/logout` | logout user |
| GET | `/api/auth/me` | current user |
| POST | `/api/create` | create short URL |
| POST | `/api/user/urls` | user URL history |
| GET | `/:id` | redirect by short code |

---

## ▶️ Run Locally

### Backend

```bash
cd BACKEND
npm install
npm start
```

### Frontend

```bash
cd FRONTEND
npm install
npm run dev
```

---

## ☁️ Deployment Guide

### Render (backend)
1. Deploy `BACKEND`
2. Add env variables
3. Confirm `https://<backend>/api/health` returns status ok

### Vercel (frontend)
1. Deploy `FRONTEND`
2. Add `VITE_API_BASE_URL`
3. Redeploy and verify API connectivity

---

## 🧪 Troubleshooting

### 1) CORS blocked in browser
- ensure frontend domain exists in `CORS_ORIGIN` list
- keep list comma-separated, no trailing spaces

### 2) 404 for short URL
- verify redirect endpoint is reachable on backend
- check DB contains matching `short_url`
- verify copied short code casing (project uses lowercase generation)

### 3) Invalid SSL / private connection warning
- verify custom domain SSL status on host
- wait for DNS + certificate propagation

### 4) Wrong base URL in generated links
- verify `APP_URL`
- check if `RENDER_EXTERNAL_URL` overrides in hosted env

### 5) Login/session not persisting
- verify cookie settings + HTTPS in production
- ensure frontend and backend domains are correctly set for credentials requests

---

## 🚀 Future Improvements

- Add automated unit/integration tests
- Add QR code generation for each short URL
- Add expiration time per short URL
- Add link analytics dashboard (charts, referrers)
- Add role-based admin panel


---

## 🤝 Contribution

1. Fork repo
2. Create feature branch
3. Commit changes
4. Open PR

---
Developed with ❤️ by **Ankita Rai**
