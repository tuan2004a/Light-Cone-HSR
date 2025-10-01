# Honkai: Star Rail Light Cone Database
A web application to browse and manage Light Cones from Honkai: Star Rail game.

## 🛠️ Technologies Used

### Frontend
- React.js
- Tailwind CSS
- Zustand (State Management)
- Vite (Build Tool)

### Backend
- JSON Server (RESTful API)

## ✨ Features
- Browse Light Cones collection
- Filter Light Cones by path and rarity
- View detailed Light Cone information
- Search functionality
- Responsive design for mobile and desktop

## ⚙️ System Requirements
- Node.js >= 14.x
- npm >= 6.x
- Computer with internet connection
- Operating System: Windows, macOS, or Linux

## 🚀 Running the Project

### 1. Start Frontend
```bash
npm run dev
```
Then open the address shown in the terminal (usually http://localhost:5173).

### 2. Start Backend (JSON Server)
```bash
npm run json
```
Backend API will run at http://localhost:3001.

## 📝 Notes
- If you change the db.json file, restart JSON Server to update the data.
- Make sure json-server is running so the frontend can fetch Light Cone data.
- If you encounter errors, check your Node.js and npm/yarn versions.
- You can customize Light Cone data in the src/db/db.json file.
