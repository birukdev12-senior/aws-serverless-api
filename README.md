---

## 📝 **2. AWS Serverless API README.md**

`github.com/birukdev12-senior/aws-serverless-api` 

```markdown
# ☁️ AWS Serverless REST API

A production‑ready RESTful API built with Node.js & Express, designed for serverless deployment on AWS Lambda.

![Node](https://img.shields.io/badge/Node.js-18-green)
![Express](https://img.shields.io/badge/Express-4.x-black)
![Render](https://img.shields.io/badge/Deployed-Render-46E3B7)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🚀 Live API
**Base URL:** [`https://aws-serverless-api.onrender.com`](https://aws-serverless-api.onrender.com)

> ⚠️ *Free Render tier — first request may take 30‑60s to wake up.*

## 📡 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check |
| `GET` | `/api/users` | Get all users |
| `POST` | `/api/users` | Create a new user |
| `PUT` | `/api/users/:id` | Update a user |
| `DELETE` | `/api/users/:id` | Delete a user |

## 🧪 Quick Test
```bash
# Health check
curl https://aws-serverless-api.onrender.com/

# Get users
curl https://aws-serverless-api.onrender.com/api/users

# Create user
curl -X POST https://aws-serverless-api.onrender.com/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Biruk","email":"biruk@example.com"}'

#🛠 Tech Stack
| Category   | Technology |
|------------|------------|
| Runtime    | Node.js |
| Framework  | Express.js |
| Serverless | serverless‑http (AWS Lambda ready) |
| Validation | express‑validator |
| Database   | DynamoDB (configurable) |
| Deployment | Render |

📂 Project Structure
├── index.js              # Entry point + Express app
├── routes/
│   └── users.js          # User CRUD routes
├── middleware/
│   └── errorHandler.js   # Global error handling
├── .env.example          # Environment variables template
├── package.json
└── README.md

🚦 Getting Started
git clone https://github.com/birukdev12-senior/aws-serverless-api.git
cd aws-serverless-api
npm install
cp .env.example .env
npm run dev
Server runs on http://localhost:3000

☁️ Deploy to AWS Lambda
# Using Serverless Framework
npm install -g serverless
serverless deploy
