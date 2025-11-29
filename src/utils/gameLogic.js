
export const COLORS = ['red', 'yellow', 'green', 'blue'];
export const VALUES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'skip', 'reverse', 'draw2'];
export const SPECIAL_CARDS = ['wild', 'wild_draw4'];

export const createDeck = () => {
  const deck = [];

  COLORS.forEach(color => {
    // 0 card (one per color)
    deck.push({ id: `${color}-0`, color, value: '0', type: 'number' });

    // 1-9 cards (two per color)
    for (let i = 1; i <= 9; i++) {
      deck.push({ id: `${color}-${i}-1`, color, value: `${i}`, type: 'number' });
      deck.push({ id: `${color}-${i}-2`, color, value: `${i}`, type: 'number' });
    }

    // Action cards (two per color)
    ['skip', 'reverse', 'draw2'].forEach(action => {
      deck.push({ id: `${color}-${action}-1`, color, value: action, type: 'action' });
      deck.push({ id: `${color}-${action}-2`, color, value: action, type: 'action' });
    });
  });

  // Wild cards (four of each)
  for (let i = 0; i < 4; i++) {
    deck.push({ id: `wild-${i}`, color: 'black', value: 'wild', type: 'wild' });
    deck.push({ id: `wild_draw4-${i}`, color: 'black', value: 'wild_draw4', type: 'wild' });
  }

  return deck;
};

export const shuffleDeck = (deck) => {
  const newDeck = [...deck];
  for (let i = newDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
  }
  return newDeck;
};

export const isValidPlay = (card, topCard, currentColor) => {
  // If wild, it's always valid (unless there are specific house rules, but we'll keep it simple)
  if (card.type === 'wild') return true;

  // If top card is wild, check against the declared color
  if (topCard.type === 'wild') {
    return card.color === currentColor;
  }

  // Match color or value
  return card.color === topCard.color || card.value === topCard.value;
};

export const getNextPlayerIndex = (currentPlayerIndex, direction, numPlayers) => {
  let nextIndex = currentPlayerIndex + direction;
  if (nextIndex < 0) nextIndex = numPlayers - 1;
  if (nextIndex >= numPlayers) nextIndex = 0;
  return nextIndex;
};
