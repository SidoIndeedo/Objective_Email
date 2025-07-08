# 📬 Objective Email

**Objective Email** is a microservices-based application designed to privately fetch, queue, and process Gmail messages using BullMQ and LLMs — with **zero long-term data storage** and **maximum user privacy**.

---

## 🚀 Project Highlights

- 🔐 **Google OAuth Login** (via Auth0)  
- 📩 **Fetch Gmail Emails** securely from X to Y date  
- 🧠 **Microservices Architecture** (Dockerized)  
- 🕵️ **Privacy-First**: No email body is permanently stored  
- ⚙️ **Asynchronous Processing** using **Redis + BullMQ**
- 🧾 **LLM Queue-Processing Ready** for smart summarization or tagging
- ⚡ Fast API responses with background email parsing via queues

---

## 🧱 Tech Stack

| Layer           | Tech                                  |
|----------------|----------------------------------------|
| Auth Service   | Node.js, Passport.js, Google OAuth2    |
| Email Service  | Node.js, Gmail API, BullMQ, Redis      |
| Queue System   | Redis, BullMQ                          |
| Containerized  | Docker + Docker Compose                |
| DB             | MongoDB (scoped DBs per service)       |

---

## 🛠 Architecture Overview

```bash
📦 objective-email/
├── frontend/              # (Coming soon)
├── services/
│   ├── log-sign/          # Auth Service (OAuth, JWT)
│   └── core/              # Email Fetcher + Queue Producer
├── docker-compose.yml     # Multi-container orchestrator
└── README.md              # This file
