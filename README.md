# 🧠 Quiz Web Application

A full-stack quiz web application built using Node.js, Express.js, MongoDB, and EJS. This project demonstrates a client-server architecture using RESTful APIs to handle quiz submission, scoring, and leaderboard management.

---

## 🏠 Home

---

## 🚀 Project Overview

This application allows users to attempt a quiz, calculate their score, and store results in a database. It also includes a leaderboard system where all users' scores are displayed in descending order.

The backend handles routing, quiz logic, and database operations, while MongoDB stores quiz scores.

---

## 🧠 Architecture

The application follows a **3-layer architecture**:

### 1️⃣ Client (Frontend)
- Built using EJS templates  
- Displays quiz UI and results  
- Sends HTTP requests (GET, POST)  
- Renders dynamic score and leaderboard  

### 2️⃣ Server (Backend)
- Built using Node.js and Express.js  
- Handles routing and request processing  
- Contains quiz logic (answer checking & scoring)  
- Saves and fetches data from database  

### 3️⃣ Database (MongoDB)
- Stores quiz scores  
- Uses Mongoose for schema & data modeling  
- Ensures structured data storage  

📌 Mongoose acts as an ODM, helping define schemas and perform CRUD operations efficiently :contentReference[oaicite:0]{index=0}  

---

## 🔁 Working Flow

- User opens quiz page  
- User submits answers  
- Server compares answers with correct ones  
- Score is calculated  
- Score is saved to MongoDB  
- User sees result  
- Leaderboard fetches and displays all scores  

---

## 🔗 API Design

The application uses RESTful APIs for quiz handling.

### 📌 Endpoints

| Method | Endpoint            | Description                     |
|--------|-------------------|---------------------------------|
| GET    | /                 | Home page                      |
| GET    | /quiz1            | Quiz page                      |
| POST   | /quiz1/submit     | Submit quiz & calculate score  |
| GET    | /leaderboard      | View all scores (sorted)       |

---

## ⚙️ How APIs Work

- **GET** → Load quiz or leaderboard  
- **POST** → Submit answers & calculate score  

### Example Flow:

- User submits quiz → `POST /quiz1/submit`  
- Server checks answers  
- Server stores score in MongoDB  
- Server sends result page  
- Leaderboard fetches all scores  

---

## 🛠️ Tech Stack

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  
- Mongoose  

### Frontend
- EJS  
- HTML  
- CSS  
- JavaScript  

---


---

## ✨ Features

- ✅ Quiz system with predefined answers  
- ✅ Automatic score calculation  
- ✅ MongoDB database integration  
- ✅ Leaderboard (sorted by highest score)  
- ✅ Dynamic EJS rendering  
- ✅ REST API-based architecture  

---

## 📸 Screenshots

- Home Page
<img width="1918" height="916" alt="Home" src="https://github.com/user-attachments/assets/6b469e85-da78-4184-aaf2-c18584faf454" />

- 
- Quiz Page

-   <img width="1917" height="911" alt="Quiz" src="https://github.com/user-attachments/assets/63ff68c7-1a45-4cc9-988a-d21abc787332" />

- Score Page

-   <img width="1908" height="928" alt="Score" src="https://github.com/user-attachments/assets/9de6e448-f4ab-4a54-b40b-433936c4b707" />

- Leaderboard

-   <img width="1917" height="930" alt="leaderboard" src="https://github.com/user-attachments/assets/9e25529c-f7b2-4eee-bb78-4df96122416b" />




---

## 📚 Key Learnings

- Building RESTful APIs using Express  
- Using MongoDB with Mongoose  
- Schema & Model creation  
- Handling form data in Express  
- Implementing leaderboard logic  
- Full-stack flow understanding  

---

## 🚀 Future Improvements

- Add multiple quizzes  
- Add user authentication  
- Timer-based quiz  
- Store user names with scores  
- Improve UI/UX design  
- Add difficulty levels  

---

## 🤝 Conclusion

This project helped build a strong foundation in backend development, database integration, and full-stack application flow by implementing a practical quiz system with scoring and leaderboard functionality.
