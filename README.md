📝 iNOTEBOOK

iNotebook is a full-stack notes application that allows users to securely create, manage, and organize personal notes. It implements JWT-based authentication, bcrypt password hashing, and protected routes to ensure secure access and user-specific data isolation.

The app features a modern React frontend, a Node.js/Express backend, and a MongoDB database, with APIs fully tested using Postman

---

🚀 Features

✅ User Signup & Login

🔐 JWT-based Authentication & Authorization

🔑 Password hashing using bcrypt

🔄 Update password functionality

👤 Secure access to user-specific notes

✏️ Full CRUD (Create, Read, Update, Delete) operations for notes

🌐 RESTful backend APIs

⚛️ Context API for global state management in React

📱 Responsive frontend UI

🧪 Backend API testing using Postman

---

## Screenshots

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/0361a413-40a5-4bae-b463-e4984f9045ef" /> <img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/e594c508-e8ad-4d85-a856-6ff3a890628b" />


---


## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- Bootstrap

### Backend
- Node.js
- Express.js
- JWT (JSON Web Tokens)
- bcrypt

### Database
- MongoDB

### Tools
- Git & GitHub
- VS Code
- MongoDB Compass
- Postman

---


## 🔐 Authentication & Authorization

- User signup and login with secure JWT token

- Protected API routes using middleware

- Users can only access their own notes

- Password updates are hashed and stored securely
---

## 🔄 CRUD Operations on Notes

- **Create:** Add new notes
- **Read:** Fetch user-specific notes
- **Update:** Modify existing notes
- **Delete:** Remove notes securely

---

| Method | Endpoint                   | Description                               |
| ------ | -------------------------- | ----------------------------------------- |
| POST   | `/api/auth/createuser`     | Create a new user                         |
| POST   | `/api/auth/login`          | Authenticate a user and get JWT           |
| POST   | `/api/auth/getuser`        | Get details of logged-in user (protected) |
| PUT    | `/api/auth/updatepassword` | Update password for logged-in user        |


---

👩‍💻 Author

Your Name
GitHub: https://github.com/DhanasriSiramdasu
