# node-auth-v1

A lightweight authentication server built with **Node.js**, **Hono**, and **TypeScript**. It provides JWT‑based login, registration, and protected routes out of the box.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [License](#license)

---

## Overview

`node-auth-v1` is a minimalistic authentication service designed for rapid prototyping and small‑scale production use. It uses **Hono** – a tiny, fast web framework – and **jsonwebtoken** for token handling. The codebase is fully typed with TypeScript, making it easy to extend and integrate.

---

## Features

- **User registration** with email & password validation
- **Login** returning a signed JWT
- **Protected routes** using middleware to verify tokens
- **Password hashing** with `bcrypt`
- **TypeScript** for type safety throughout the codebase
- Simple in‑memory user store (replaceable with a DB)

---

## Prerequisites

- **Node.js** >= 18.x
- **npm** (comes with Node) or **yarn**
- **Git** (to clone the repository)

---

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/node-auth-v1.git
cd node-auth-v1

# Install dependencies
npm install   # or `yarn install`
```

---

## Running the Server

```bash
# Development mode (watch files)
npm run dev

# Production build
npm run build && npm start
```

The server listens on **http://localhost:3000** by default.

---

## API Endpoints

| Method | Path         | Description                                                             |
| ------ | ------------ | ----------------------------------------------------------------------- |
| `POST` | `/register`  | Register a new user (email, password)                                   |
| `POST` | `/login`     | Authenticate and receive a JWT                                          |
| `GET`  | `/protected` | Example of a protected route – requires `Authorization: Bearer <token>` |

All request bodies are JSON. Example registration payload:

```json
{ "email": "user@example.com", "password": "Secret123!" }
```

---

## Environment Variables

| Variable             | Description                      | Default         |
| -------------------- | -------------------------------- | --------------- |
| `PORT`               | Port the server runs on          | `3000`          |
| `JWT_SECRET`         | Secret key for signing JWTs      | `"your-secret"` |
| `BCRYPT_SALT_ROUNDS` | Salt rounds for password hashing | `10`            |

Create a `.env` file at the project root to override defaults.

---

## Testing

The project includes a basic test suite using **Vitest**.

```bash
npm run test
```

Add more tests as you extend functionality.

---

## License

MIT © 2025 Your Name
