
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all for demo purposes
    methods: ["GET", "POST"]
  }
});

// Game State Store (In-memory)
const rooms = {};

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('create_room', (playerName) => {
    const roomId = Math.random().toString(36).substring(2, 7).toUpperCase();
    rooms[roomId] = {
      id: roomId,
      players: [{ id: socket.id, name: playerName, hand: [] }],
      gameState: null, // Will hold deck, discardPile, etc.
      host: socket.id
    };
    socket.join(roomId);
    socket.emit('room_created', { roomId, players: rooms[roomId].players });
    console.log(`Room ${roomId} created by ${playerName}`);
  });

  socket.on('join_room', ({ roomId, playerName }) => {
    if (rooms[roomId]) {
      if (rooms[roomId].players.length >= 4) {
        socket.emit('error', 'Room is full');
        return;
      }
      rooms[roomId].players.push({ id: socket.id, name: playerName, hand: [] });
      socket.join(roomId);
      io.to(roomId).emit('player_joined', rooms[roomId].players);
      console.log(`${playerName} joined room ${roomId}`);
    } else {
      socket.emit('error', 'Room not found');
    }
  });

  // Host starts the game - Initial state setup should happen here or be sent by host
  // For simplicity, we'll let the host client calculate initial state and send it
  socket.on('start_game', ({ roomId, initialGameState }) => {
    if (rooms[roomId] && rooms[roomId].host === socket.id) {
      rooms[roomId].gameState = initialGameState;
      io.to(roomId).emit('game_started', initialGameState);
    }
  });

  // Relay game actions
  socket.on('game_action', ({ roomId, action, data }) => {
    // Broadcast action to all other players in room
    socket.to(roomId).emit('game_update', { action, data });
  });
  
  // Sync full state (optional, for robustness)
  socket.on('sync_state', ({ roomId, state }) => {
    socket.to(roomId).emit('state_synced', state);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    // Handle cleanup...
    for (const roomId in rooms) {
      const room = rooms[roomId];
      const playerIndex = room.players.findIndex(p => p.id === socket.id);
      if (playerIndex !== -1) {
        room.players.splice(playerIndex, 1);
        io.to(roomId).emit('player_left', room.players);
        if (room.players.length === 0) {
          delete rooms[roomId];
        }
        break;
      }
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
