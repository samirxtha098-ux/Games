<<<<<<< HEAD
# Uno Multiplayer Game 🎮

A real-time multiplayer UNO card game built with React and Socket.io!

## 🎯 Features
- ✨ Real-time multiplayer gameplay
- 🎨 Beautiful, modern UI with smooth animations
- 🔊 Dynamic sound effects
- 🃏 Full UNO rules (Skip, Reverse, Draw 2, Wild, Wild Draw 4)
- 👥 Support for up to 4 players per room
- 📱 Responsive design

## 🚀 Live Demo
- **Frontend**: [Your Vercel URL will be here]
- **Backend**: [Your Render URL will be here]

## 🛠️ Tech Stack
- **Frontend**: React, Vite, Socket.io-client
- **Backend**: Node.js, Express, Socket.io
- **Hosting**: Vercel (frontend) + Render.com (backend)

## 📦 Local Development

### Prerequisites
- Node.js 16+ installed

### Setup
1. Clone the repository:
```bash
git clone <your-repo-url>
cd demo
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd server
npm install
cd ..
```

4. Run the backend server:
```bash
cd server
npm start
```

5. Run the frontend (in a new terminal):
```bash
npm run dev
```

6. Open `http://localhost:5173` in multiple browser tabs to test multiplayer!

## 🌐 Deployment Instructions

### Quick Deploy (Recommended)

#### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

#### Step 2: Deploy Backend to Render
1. Go to [render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: uno-game-server
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click "Create Web Service"
6. Copy your service URL (e.g., `https://uno-game-server.onrender.com`)

#### Step 3: Deploy Frontend to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - Add Environment Variable:
     - Key: `VITE_SERVER_URL`
     - Value: `https://uno-game-server.onrender.com` (your Render URL)
5. Click "Deploy"
6. Your game is live! 🎉

## 🎮 How to Play

1. **Create a Room**: Enter your name and click "Create Room"
2. **Share Room Code**: Give the room code to your friends
3. **Join**: Friends enter the code to join your game
4. **Start**: Host clicks "Start Game" when ready
5. **Play**: Match cards by color or number, use special cards strategically!
6. **Win**: First player to empty their hand wins!

## 🎴 Game Rules
- Match cards by color or value
- **Skip**: Next player loses their turn
- **Reverse**: Reverses play direction
- **Draw 2**: Next player draws 2 cards and loses turn
- **Wild**: Choose any color
- **Wild Draw 4**: Choose color, next player draws 4 cards

## 📝 License
MIT

## 🤝 Contributing
Pull requests are welcome!

---
Made with ❤️ using React and Socket.io
=======
# Game
>>>>>>> b1dd0bdecf7ad8c32dcac27167c51a8be1327eb3
