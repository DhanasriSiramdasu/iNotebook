# iNOTEBOOK 📝

iNOTEBOOK is a full-stack notes application that enables users to securely create, manage, and organize personal notes. The application implements JWT-based authentication with bcrypt password hashing to ensure secure access and user-specific data isolation. Backend APIs are tested and validated using Postman.

---

## 🚀 Features

- User Signup & Login
- JWT-based Authentication & Authorization
- Password hashing using bcrypt
- Secure access to user-specific notes
- Create, Read, Update, Delete (CRUD) operations
- RESTful backend APIs
- Context API for global state management
- Responsive frontend UI
- Backend API testing using Postman

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

## 📁 Project Structure



iNOTEBOOK/
│
├── backend/
│ ├── routes/ # API routes
│ ├── controllers/ # Request handling logic
│ ├── models/ # MongoDB schemas
│ ├── middleware/ # Auth & validation middleware
│ ├── db.js # Database connection
│ └── index.js # Backend entry point
│
├── public/
│ └── index.html # React root HTML
│
├── src/
│ ├── components/ # Reusable UI components
│ ├── context/ # Global state management
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── index.css
│
├── node_modules/
├── package.json
├── package-lock.json
├── .gitignore


---

## 🔐 Authentication & Authorization

- User authentication using secure login/signup
- Protected API routes using middleware
- Authorization ensures users access only their own notes

---

## 🔄 CRUD Operations on Notes

- **Create:** Add new notes
- **Read:** Fetch user-specific notes
- **Update:** Modify existing notes
- **Delete:** Remove notes securely

---

👩‍💻 Author

Your Name
GitHub: https://github.com/DhanasriSiramdasu
