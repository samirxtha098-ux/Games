
import React from 'react';

const Card = ({ card, onClick, isPlayable }) => {
  const { color, value, type } = card;
  
  const getCardContent = () => {
    if (type === 'wild') {
      if (value === 'wild_draw4') return '+4';
      return 'W';
    }
    if (value === 'skip') return '⊘';
    if (value === 'reverse') return '⇄';
    if (value === 'draw2') return '+2';
    return value;
  };

  const content = getCardContent();
  
  // Dynamic class for color
  const colorClass = color === 'black' ? 'bg-black' : `bg-${color}-500`;
  
  return (
    <div 
      className={`
        card ${color}
        ${isPlayable ? 'playable' : ''}
      `}
      style={{
        width: '96px',
        height: '144px',
        borderRadius: '10px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        userSelect: 'none',
        border: isPlayable ? '4px solid #ffcc00' : '2px solid white'
      }}
      onClick={onClick}
      data-color={color}
      data-value={value}
    >
      <div className="card-inner" style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '8px',
        boxSizing: 'border-box'
      }}>
        <span style={{ alignSelf: 'flex-start', fontSize: '1.2rem', fontWeight: 'bold' }}>{content}</span>
        <span style={{ alignSelf: 'center', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}>{content}</span>
        <span style={{ alignSelf: 'flex-end', fontSize: '1.2rem', fontWeight: 'bold', transform: 'rotate(180deg)' }}>{content}</span>
      </div>
      
      {/* Oval center decoration */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(45deg)',
        width: '60px',
        height: '90px',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>
    </div>
  );
};

export default Card;
