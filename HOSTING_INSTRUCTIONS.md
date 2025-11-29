
# How to Host Your Uno Game

## 1. Frontend (The Game UI)
You can host the frontend easily on **Vercel** or **Netlify**.

1.  Push this code to GitHub.
2.  Go to Vercel.com, import your repository.
3.  It will automatically detect Vite/React.
4.  **Important**: You need to set the environment variable for the backend URL.
    *   In `src/App.jsx`, change `io('http://localhost:3001')` to use an environment variable like `io(import.meta.env.VITE_SERVER_URL || 'http://localhost:3001')`.
    *   In Vercel, set `VITE_SERVER_URL` to your deployed backend URL (see below).

## 2. Backend (The Multiplayer Server)
You need a server running Node.js to handle the multiplayer connections.

**Option A: Render.com (Free)**
1.  Create a new "Web Service" on Render.
2.  Connect your GitHub repo.
3.  Set the "Root Directory" to `server`.
4.  Set the "Build Command" to `npm install`.
5.  Set the "Start Command" to `node index.mjs`.
6.  Deploy! Render will give you a URL (e.g., `https://my-uno-server.onrender.com`).
7.  Use this URL in your Frontend configuration.

**Option B: Glitch (Easiest for testing)**
1.  Go to Glitch.com and create a new project.
2.  Copy the contents of `server/package.json` and `server/index.mjs` to Glitch.
3.  Glitch gives you a URL immediately.

## 3. Running Locally
1.  Open two terminals.
2.  Terminal 1 (Server): `cd server` -> `npm install` -> `node index.mjs`
3.  Terminal 2 (Frontend): `npm install` -> `npm run dev`
4.  Open `http://localhost:5173` in multiple tabs/browsers to test multiplayer!
