# Troubleshooting Room Creation Issues

## Problem: Can't Create Room

If you're unable to create a room in the UNO game, follow these steps:

### 1. ✅ Check Server Status
**The server MUST be running before you can create or join rooms.**

**Start the server:**
```bash
cd server
node index.mjs
```

You should see:
```
Server running on port 3001
```

### 2. 🔌 Check Connection Status
Look at the top-right corner of the lobby screen:
- 🟢 **Connected** - Server is reachable, you can create rooms
- 🟡 **Connecting...** - Still connecting to server, wait a moment
- 🔴 **Connection Error** - Server is not reachable

### 3. 🐛 Check Browser Console
Open your browser's Developer Tools (F12) and check the Console tab for errors:

**Common errors:**
- `Connection error` - Server is not running or wrong URL
- `ERR_CONNECTION_REFUSED` - Server is not running on the expected port
- No errors but stuck on "Connecting..." - Firewall or network issue

### 4. ✔️ Verify Server Configuration

**Server port:** Port 3001 (fixed in recent update)
**Client expects:** Port 3001

Both should match now!

### 5. 🌐 Check Environment Variables (For Deployed Apps)

If you're running a deployed version:
- Create a `.env` file in the root directory
- Add: `VITE_SERVER_URL=https://your-server-url.com`
- Replace with your actual server URL

## Quick Test Steps

1. **Start server:**
   ```bash
   cd server
   node index.mjs
   ```

2. **Start client (in a new terminal):**
   ```bash
   npm run dev
   ```

3. **Open browser:** `http://localhost:5173`
4. **Check connection status:** Top-right should show "🟢 Connected"
5. **Enter your name and click "Create Room"**

## Still Having Issues?

### Check the server console logs:
- When you click "Create Room", you should see: `Room XXXXX created by [YourName]`
- When someone connects: `User connected: [socket-id]`

### Check the browser console logs:
- When connected: `Connected to server: [socket-id]`
- When room created: `Room created: [room-code]`

## Recent Fixes Applied
- ✅ Fixed port mismatch (server now uses 3001)
- ✅ Added connection status indicator
- ✅ Added error handling and logging
- ✅ Added disconnect detection

---

**Last Updated:** December 6, 2025
