# 💬 Mini WhatsApp Chat Management App

A lightweight, full-stack chat management system inspired by WhatsApp. Built using Node.js, Express, MongoDB, and EJS, this project demonstrates CRUD operations, RESTful routing, and dynamic UI rendering for managing chat messages.

## 🚀 Features

- 📨 Create new chat messages
- 📝 Edit existing messages
- 🗑️ Delete messages
- 🧾 Timestamp each message (created & updated)
- 🎨 Minimal, responsive UI using EJS and custom CSS
- 📁 RESTful routing for clean and scalable architecture

---
## 🛠️ Tech Stack

| Technology     | Purpose                          |
|----------------|----------------------------------|
| Node.js        | Backend runtime environment      |
| Express.js     | Web framework for routing        |
| MongoDB        | NoSQL database for message storage |
| Mongoose       | ODM for MongoDB schema modeling  |
| EJS            | Templating engine for dynamic HTML |
| HTML/CSS       | Frontend structure and styling   |
| Method-Override| Enables PUT/DELETE in forms      |

---
## 📂 Project Structure
Mini-WhatsApp/ ├── models/ │   └── chat.js         # Mongoose schema for chat messages ├── views/ │   ├── index.ejs       # Homepage displaying all messages │   ├── new.ejs         # Form to create a new message │   └── edit.ejs        # Form to edit a message ├── public/ │   └── style.css       # Custom styling ├── index.js            # Main server file ├── init.js             # Optional DB seeding script └── package.json        # Project metadata and dependencies
---

## 🧪 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mini-whatsapp.git
   cd mongoExpressLst
2. Install dependencies
npm install
3.Start MongoDB locally or use MongoDB Atlas
4. Run the app
node index.js
 5. Visit
http://localhost:8080

📌 Future Enhancements
- ✅ User authentication
- ✅ Real-time messaging with Socket.io
- ✅ Media attachments (images, videos)
- ✅ Group chat support

🧠 Learning Outcomes
- Mastered RESTful API design
- Practiced full-stack CRUD operations
- Explored MongoDB schema modeling
- Built clean, maintainable project structure





