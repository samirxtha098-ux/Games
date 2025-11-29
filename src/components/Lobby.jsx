
import React, { useState } from 'react';

const Lobby = ({ onCreateRoom, onJoinRoom }) => {
  const [playerName, setPlayerName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [mode, setMode] = useState('menu'); // menu, join

  const handleCreate = () => {
    if (!playerName) return alert('Enter name');
    onCreateRoom(playerName);
  };

  const handleJoin = () => {
    if (!playerName || !roomId) return alert('Enter name and room ID');
    onJoinRoom(roomId, playerName);
  };

  return (
    <div className="lobby-container" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      justifyContent: 'center', height: '100vh', color: 'white', gap: '20px'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px', textShadow: '4px 4px 0 #000' }}>UNO</h1>
      
      <input 
        type="text" 
        placeholder="Enter Your Name" 
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        style={{ padding: '15px', fontSize: '1.2rem', borderRadius: '10px', border: 'none', width: '300px' }}
      />

      {mode === 'menu' && (
        <div style={{ display: 'flex', gap: '20px' }}>
          <button className="btn" onClick={handleCreate} style={{ fontSize: '1.5rem' }}>Create Room</button>
          <button className="btn" onClick={() => setMode('join')} style={{ fontSize: '1.5rem', background: '#5555ff' }}>Join Room</button>
        </div>
      )}

      {mode === 'join' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="Room ID" 
            value={roomId}
            onChange={(e) => setRoomId(e.target.value.toUpperCase())}
            style={{ padding: '15px', fontSize: '1.2rem', borderRadius: '10px', border: 'none', width: '300px' }}
          />
          <button className="btn" onClick={handleJoin} style={{ fontSize: '1.5rem' }}>Enter Game</button>
          <button className="btn" onClick={() => setMode('menu')} style={{ background: 'transparent', border: '1px solid white' }}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Lobby;
