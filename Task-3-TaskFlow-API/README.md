# 🚀 TaskFlow API

## SoftNexis Internship - Task 3

### 📌 Project Overview

TaskFlow API is a RESTful backend service built using Node.js and Express.js. It serves as the backend layer for the TaskFlow Lite application and provides complete CRUD (Create, Read, Update, Delete) functionality for task management.

This project demonstrates backend development concepts including API design, middleware implementation, request validation, error handling, and HTTP communication standards.

---

## 🎯 Objectives

* Build a RESTful API using Express.js
* Implement CRUD operations for tasks
* Use middleware for security and logging
* Follow proper HTTP status code conventions
* Validate user input and handle errors gracefully
* Prepare the application for future MongoDB integration

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* CORS
* Morgan
* Helmet
* Dotenv
* Nodemon

---

## 📂 Project Structure

```text
Task-3-TaskFlow-API/
│
├── server.js
├── package.json
├── .env
├── .gitignore
├── README.md
│
├── src/
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   ├── notFound.js
│   │   └── security.js
│   │
│   ├── data/
│   │   └── taskStore.js
│   │
│   └── utils/
│       └── validation.js
│
└── tests/
    └── TaskFlow-API.postman_collection.json
```

---

## ⚡ Features

### Task Management

* Create new tasks
* Retrieve all tasks
* Retrieve single task by ID
* Update existing tasks
* Delete tasks

### Middleware Integration

* Cross-Origin Resource Sharing (CORS)
* Request Logging using Morgan
* Security Headers using Helmet
* Custom Error Handling Middleware

### Validation

* Empty task prevention
* Minimum text length validation
* Maximum text length validation

### Security

* Helmet security headers
* Custom security middleware
* JSON request validation

---

## 🔗 API Endpoints

### Get All Tasks

```http
GET /api/tasks
```

Response:

```json
[
  {
    "id": 1,
    "text": "Learn Express",
    "completed": false
  }
]
```

---

### Get Single Task

```http
GET /api/tasks/:id
```

---

### Create Task

```http
POST /api/tasks
```

Request Body:

```json
{
  "text": "Build REST API"
}
```

---

### Update Task

```http
PUT /api/tasks/:id
```

Request Body:

```json
{
  "completed": true
}
```

---

### Delete Task

```http
DELETE /api/tasks/:id
```

---

## 📊 HTTP Status Codes

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | Success               |
| 201         | Resource Created      |
| 204         | Resource Deleted      |
| 400         | Bad Request           |
| 404         | Resource Not Found    |
| 500         | Internal Server Error |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project

```bash
cd Task-3-TaskFlow-API
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a .env file:

```env
PORT=5000
NODE_ENV=development
```

### Run Development Server

```bash
npm run dev
```

Server:

```text
http://localhost:5000
```

---

## 🧪 API Testing

The API can be tested using:

* Postman
* Thunder Client
* Insomnia

### Sample Test Cases

✅ Create Task

✅ Get All Tasks

✅ Get Task By ID

✅ Update Task

✅ Delete Task

✅ Invalid Task Validation

✅ Invalid ID Handling

---

## 🔒 Security Features

* Helmet Security Headers
* CORS Protection
* Request Validation
* Error Handling Middleware
* Input Sanitization

---

## 📈 Learning Outcomes

This project demonstrates practical experience with:

* REST API Design
* Express.js Framework
* Middleware Architecture
* HTTP Methods and Status Codes
* Request Validation
* Error Handling
* API Testing
* Backend Application Development

---

## 🚀 Future Enhancements

* MongoDB Database Integration
* Mongoose Models
* JWT Authentication
* User Accounts
* Task Categories
* Rate Limiting
* Swagger API Documentation
* Deployment on Render

---

## 👨‍💻 Developer

**Manas Pandey**

Bachelor of Science in Information Technology

GitHub: https://github.com/Manas22-creator

Portfolio: https://manas22portfolio.netlify.app

LinkedIn: https://linkedin.com/in/manas-pandey-24684a255

---

## 📜 Internship Information

Project completed as part of the SoftNexis Technology Internship Program.

Task 3: Backend API with Node.js and Express

Status: ✅ Completed
