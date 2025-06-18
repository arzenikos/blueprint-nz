
// src/components/GridTile.tsx
import React from 'react';
import type { Position } from './types';

interface GridTileProps {
  position: Position;
  playerPos: Position;
  nodes: Position[];
}

const GridTile: React.FC<GridTileProps> = ({ position, playerPos, nodes }) => {
  const isPlayer = playerPos.x === position.x && playerPos.y === position.y;
  const isNode = nodes.some(node => node.x === position.x && node.y === position.y);

  let content = '';
  if (isPlayer) content = '🧍';
  else if (isNode) content = '📍';

  return (
    <div
      className={`w-12 h-12 flex items-center justify-center border
        ${isPlayer ? 'bg-blue-500' : isNode ? 'bg-green-300' : 'bg-gray-100'}
        transition-colors duration-200
      `}
    >
      {content}
    </div>
  );
};

export default GridTile;
