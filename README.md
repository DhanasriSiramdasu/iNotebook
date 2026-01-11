# 📝 iNOTEBOOK

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

## 📸 Screenshots
<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/703df162-f9c0-4cb9-98ba-90504b2f3208" />
<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/0361a413-40a5-4bae-b463-e4984f9045ef" />     <img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/e594c508-e8ad-4d85-a856-6ff3a890628b" />
<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/3f7cd0e1-0328-482f-95ed-3c09223125bc" />



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



| Method | Endpoint                    | Description                                       |
| ------ | --------------------------- | ------------------------------------------------- |
| GET    | `/api/notes/fetchallnotes`  | Fetch all notes of the logged-in user (protected) |
| POST   | `/api/notes/addnote`        | Add a new note (protected)                        |
| GET    | `/api/notes/getnote/:id`    | Fetch a single note by ID (protected)             |
| PUT    | `/api/notes/updatenote/:id` | Update an existing note by ID (protected)         |
| DELETE | `/api/notes/deletenote/:id` | Delete a note by ID (protected)                   |

---

## 📌 License

&nbsp; MIT License – free to use and modify for learning or personal projects.
## 

---

👩‍🎓 **Author:** Dhanasri Siramdasu

💻 **GitHub:** https://github.com/DhanasriSiramdasu

🔗 **LinkedIn:** https://www.linkedin.com/in/dhanasrisiramdasu/
