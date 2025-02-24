# 📌 Project Management Tool

🚀 A full-fledged **Project Management Tool** built using the **MERN Stack** to help teams collaborate, assign tasks, track progress, and manage projects efficiently. Whether you're a startup, freelancer, or enterprise, this tool simplifies workflow and boosts productivity.

---

## 🎯 Key Features

### 🔑 Authentication & Security
✅ **User Authentication** – Secure login & registration with JWT authentication  
✅ **Role-based Access Control** – Admin, Project Managers, and Developers have different permissions  
✅ **Password Encryption** – Ensuring data security using bcrypt.js  

### 📂 Project & Task Management
✅ **Create & Manage Projects** – Organize work efficiently with dedicated project spaces  
✅ **Task Assignment** – Assign tasks to team members, set priorities, and deadlines  
✅ **Task Status Tracking** – Monitor progress with real-time updates  
✅ **Milestones & Deadlines** – Ensure timely delivery of projects  

### 📊 Collaboration & Communication
✅ **Real-time Collaboration** – See updates instantly with live synchronization  
✅ **Commenting System** – Discuss tasks directly within the tool  
✅ **Notifications** – Get notified about important updates and deadlines  

### 📈 Productivity & UI Enhancements
✅ **Visual Dashboard** – Track project progress through interactive graphs and reports  
✅ **Drag & Drop Task Management** – Smoothly manage tasks via Kanban-style boards  
✅ **Dark Mode Support** – Work comfortably with a sleek dark theme  
✅ **Mobile Responsive UI** – Optimized for both desktop and mobile using Tailwind CSS  

---

## 🛠️ Tech Stack

| **Technology**  | **Description** |
|----------------|----------------|
| **Frontend**  | React.js, Tailwind CSS, Context API/Redux |
| **Backend**  | Node.js, Express.js, JWT Authentication |
| **Database**  | MongoDB, Mongoose |
| **Deployment**  | Vercel (Frontend), Render/Heroku (Backend) |
| **Other**  | bcrypt.js, dotenv, Nodemailer, WebSockets |

---

## 📦 Installation & Setup Guide

### Prerequisites
Ensure you have the following installed:
- Node.js (latest version)
- MongoDB (local or cloud-based using MongoDB Atlas)
- Git (for version control)

### 🚀 Getting Started

#### 1️⃣ Clone the repository:
```bash
$ git clone https://github.com/sudharsaa925/Project_Management_Tool.git
$ cd Project_Management_Tool
```

#### 2️⃣ Install dependencies:
##### Backend:
```bash
$ cd backend
$ npm install
```
##### Frontend:
```bash
$ cd ../frontend
$ npm install
```

#### 3️⃣ Set up environment variables:
Create a `.env` file inside both `backend` and `frontend` directories and add necessary configurations:

```env
# Backend .env file
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

# Frontend .env file
REACT_APP_API_URL=http://localhost:5000
```

#### 4️⃣ Start the development server:
##### Backend:
```bash
$ cd backend
$ npm run dev
```
##### Frontend:
```bash
$ cd frontend
$ npm start
```

Now, open your browser and navigate to `http://localhost:3000` to start using the tool! 🎉

---

## 🚀 Usage Guide

1️⃣ **Register/Login** to create your account.  
2️⃣ **Create a new project** and invite team members.  
3️⃣ **Assign tasks** to specific team members and set deadlines.  
4️⃣ **Track progress** using the interactive dashboard.  
5️⃣ **Collaborate** by leaving comments and tagging users.  
6️⃣ **Receive notifications** for task updates and due dates.  

---

## 💡 Contributing

We welcome contributions from developers! Here's how you can contribute:

1. **Fork** the repository
2. **Create a new branch**: `git checkout -b feature-name`
3. **Make your changes** and commit: `git commit -m "Added new feature"`
4. **Push to GitHub**: `git push origin feature-name`
5. **Create a Pull Request** and describe your changes

---

## 📩 Contact & Support

👤 **Sudharsaa**  
📧 Email: [Your Email](sudharsan1527@gmail.com)
🔗 GitHub: [Your GitHub](https://github.com/sudharsaa925)  


