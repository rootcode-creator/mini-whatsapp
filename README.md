<p align="center">
  <img src="./logo.png" alt="Mini WhatsApp logo" width="96" height="96" />
</p>

<h1 align="center">Mini WhatsApp</h1>

<p align="center"><i>A lightweight, full-stack chat application that mimics basic WhatsApp-style messaging.</i></p>

<p align="center">
  <img src="https://img.shields.io/badge/TYPE-CHAT%20APP-6366F1?style=for-the-badge&logo=whatsapp&logoColor=white&labelColor=4338CA" alt="Chat app" />
  <img src="https://img.shields.io/badge/STACK-NODE%20%2B%20EXPRESS-10B981?style=for-the-badge&logo=node.js&logoColor=white&labelColor=047857" alt="Node.js and Express" />
  <img src="https://img.shields.io/badge/DATABASE-MONGODB-06B6D4?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=0F766E" alt="MongoDB" />
  <img src="https://img.shields.io/badge/VIEW-EJS-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white&labelColor=CC4B4B" alt="EJS" />
  <img src="https://img.shields.io/badge/STYLE-BOOTSTRAP-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white&labelColor=5A2D91" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/RUN-LOCAL%20SERVER-4F46E5?style=for-the-badge&logo=terminal&logoColor=white&labelColor=3730A3" alt="Local server" />
</p>

A lightweight, full-stack chat application that mimics basic WhatsApp-style messaging. The app lets users create, view, edit, and delete chat records through a simple web interface, with messages stored in MongoDB using Mongoose.

## Table of Contents

- [🚀 Project Intro](#-project-intro)
- [📁 Project Structure](#-project-structure)
- [✨ Features](#-features)
- [🧰 Tech Stack](#-tech-stack)
- [⚙️ Installation](#️-installation)
- [🔐 Environment Variables](#-environment-variables)
- [▶️ Running the App](#️-running-the-app)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🚀 Project Intro

Mini WhatsApp is a small Express-based web app built for managing chat messages in a simple CRUD flow. It uses EJS templates for the UI, Bootstrap for styling, and MongoDB for persistent storage.

The application is organized around a basic chat list experience where users can:

- view all saved chats
- create a new chat entry
- edit an existing message
- delete a chat entry

## 📁 Project Structure

```txt
mini-whatsapp/
├── index.js
├── init.js
├── package.json
├── ExpressError.js
├── models/
│   └── chat.js
├── public/
│   ├── edit.css
│   ├── form.css
│   └── style.css
└── views/
    ├── edit.ejs
    ├── form.ejs
    └── index.ejs
```

## ✨ Features

- Browse all chat records from the home page
- Create new chats using a form-based interface
- Edit the message body of an existing chat
- Delete a chat from the list
- Show a total count of saved chats
- Handle missing chat and invalid route errors gracefully
- Store chat data in MongoDB through Mongoose

## 🧰 Tech Stack

- Node.js
- Express.js
- EJS
- Mongoose
- Bootstrap
- Font Awesome
- dotenv
- method-override

## ⚙️ Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd mini-whatsapp
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and set your MongoDB connection string:

```env
ATLASDB_URL=your_mongodb_connection_string
```

4. Optional: seed sample chat data:

```bash
node init.js
```

## 🔐 Environment Variables

The app reads the following environment variable:

- `ATLASDB_URL` — required for connecting to MongoDB

The app also checks `NODE_ENV`; when it is not set to `production`, it loads variables from `.env` using dotenv.

## ▶️ Running the App

Start the server:

```bash
node index.js
```

Then open:

```text
http://localhost:3000
```

### Main Routes

- `/` → redirects to `/chats`
- `/chats` → displays all chats
- `/chats/new` → form to create a new chat
- `/chats/:id` → view/edit chat details
- `/chats/:id/edit` → edit chat form

## 🤝 Contributing

Contributions are welcome. If you would like to improve the app, please open an issue or submit a pull request with a clear description of the change.

## 📄 License

This project is licensed under the ISC License.
