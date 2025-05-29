# ![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=30&duration=3000&pause=1000&color=00F7FF&center=true&vCenter=true&width=900&lines=Build+Your+Interview+Questions+in+Seconds!)

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
</p>

---

# 💡 About

**Ace Bot AI** is a **MERN Stack** powered backend that lets you **build, manage, and store professional AI Powered Interview Prep** in seconds. Fast, secure, and designed for scalability!

Built using modern Node.js libraries and clean, scalable code architecture.

---

# 👨‍💻 Built With

- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
- MongoDB + Mongoose
- JWT Authentication + bcrypt
- Multer for File Uploads
- dotenv for Environment Management
- cors for Secure API Communication
- nodemon for Development
- @google/genai for Gemini API usage

---

# 📊 Features

- 🔐 Secure Authentication (Register/Login/Get User)
- 🔍 Create, Read, Update, Delete Sessions
- 📸 Upload Profile Images and Thumbnails
- 🔍 Get Sessions by ID or all sessions for a user
- 🌟 Fully protected routes with JWT
- 🚀 Scalable API design

---

# 🌐 API Endpoints

### 🔒 Auth Routes

| Method | Route                    | Description        |
|:------:|:-------------------------|:-------------------|
| POST   | `/api/auth/register`     | Register new user  |
| POST   | `/api/auth/login`        | Login user         |
| GET    | `/api/auth/profile`      | Get current user   |

### 📄 Session Routes

| Method | Route                       | Description                            |
|:------:|:----------------------------|:---------------------------------------|
| POST   | `/api/sessions/create`      | Create a new session                   |
| GET    | `/api/sessions/my/sessions` | Get all sessions for logged in user    |
| GET    | `/api/sessions/:id`         | Get a session by ID                    |
| DELETE | `/api/sessions/delete/:id`  | Delete a selected session              |

### 📄 Question Routes

| Method | Route                       | Description                            |
|:------:|:----------------------------|:---------------------------------------|
| POST   | `/api/questions/add`        | Add more questions to existing session |
| POST   | `/api/questions/:id/pin`    | Pin/ Unpin selected question           |
| POST   | `/api/questions/:id/note`   | Add a note to existing question        |

### ✨ AI Routes

| Method | Route                           | Description                                      |
|:------:|:--------------------------------|:-------------------------------------------------|
| POST   | `/api/ai/generate/questions`    | Generate questions using gemini API              |
| POST   | `/api/ai/generate/explanations` | Generate selected question detailed explanation  |

---

# 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/itz-Hiru/Ace-Bot-AI.git

# Navigate to project directory
cd Ace-Bot-AI
cd backend

# Install dependencies
npm install

# Create a .env file and add necessary variables

# Run server
npm run dev
```

---

# 📁 Environment Variables

```env
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

---

# 📦 Project Structure

```bash
resume-pro-backend/
├── config/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── uploads/
├── .env
├── server.js
├── package.json
└── README.md
```

---

# 📷 Uploads

- **Profile Images**: `/uploads/`
- **Resume Thumbnails**: `/uploads/`

---

# 🔍 License

This project is licensed under the [MIT License](LICENSE).

---

# 💬 Let's Connect

<p align="center">
  <a href="https://hirumitha-portfolio.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-Visit-007ACC?style=for-the-badge&logo=vercel&logoColor=white"/>
  </a>
  <a href="https://github.com/itz-Hiru" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <a href="https://linkedin.com/in/Hirumitha" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
</p>

---

> "Crafted with ❤️ and Node.js magic!"

![Thanks](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&pause=1000&color=36BCF7&center=true&vCenter=true&lines=Thank+you+for+using+Ace+Bot+AI!;Happy+Coding!)

