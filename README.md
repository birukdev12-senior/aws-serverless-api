# ☁️ AWS Serverless REST API

![Node.js](https://img.shields.io/badge/Node.js-18-339933?style=flat-square&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express)
![Render](https://img.shields.io/badge/Live-Render-46E3B7?style=flat-square&logo=render)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

**Production‑ready REST API** engineered for serverless deployment on AWS Lambda.  
Built by **Biruk Tsegaye** – Senior Full‑Stack & Cloud Engineer (7+ years of experience).

---

## 🚀 Live API
https://aws-serverless-api.onrender.com

> *First request may take a few seconds while the free instance wakes up.*

## ✨ Key Features
- ⚡ **Serverless‑ready** – Deploy to AWS Lambda via `serverless‑http`
- 🔄 **Full CRUD** – Create, Read, Update, Delete operations
- 🛡 **Validation** – Input sanitization with `express‑validator`
- ⚠️ **Error Handling** – Centralized JSON error responses
- 🔐 **JWT‑ready** – Extensible auth middleware
- 🌍 **CORS** – Cross‑Origin Resource Sharing enabled

## 📡 API Endpoints

| Method | Endpoint          | Description       |
|--------|-------------------|-------------------|
| GET    | `/`               | Health check      |
| GET    | `/api/users`      | List all users    |
| GET    | `/api/users/:id`  | Get one user      |
| POST   | `/api/users`      | Create a user     |
| PUT    | `/api/users/:id`  | Update a user     |
| DELETE | `/api/users/:id`  | Delete a user     |

**Example request**
```bash
curl -X POST https://aws-serverless-api.onrender.com/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Biruk","email":"biruk@example.com"}'

## 🛠 Tech Stack

 Runtime     : Node.js 18
Framework    : Express.js
Serverless   : serverless‑http (Lambda adapter)
Validation   : express‑validator
Database     : DynamoDB (configurable)
Deployment   : Render (live) / AWS Lambda (target)

🚦 Getting Started
git clone https://github.com/birukdev12-senior/aws-serverless-api.git
cd aws-serverless-api
npm install
cp .env.example .env
npm run dev
Server runs on http://localhost:3000.

☁️ Deploy to AWS Lambda
npm install -g serverless
serverless deploy

🔒 Security

· Input validation & sanitization
· Helmet.js ready (HTTP headers)
· Rate limiting ready
· Secrets via environment variables

📜 License

MIT – Free to use, modify, and deploy.
