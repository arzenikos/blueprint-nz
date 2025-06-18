
// src/components/DescriptionPanel.tsx
import React from 'react';
import type { NodeInfo } from './types';

interface DescriptionPanelProps {
  node: NodeInfo | null;
}

const DescriptionPanel: React.FC<DescriptionPanelProps> = ({ node }) => {
  return (
    <div className="fixed top-4 right-4 w-64 min-h-[150px] p-4 border rounded bg-white shadow transition-opacity duration-300">
      {node ? (
        <>
          <h2 className="font-bold text-lg mb-2">Node Info</h2>
          <p>{node.description}</p>
        </>
      ) : (
        <p className="text-gray-400 italic">Move to a node to see info</p>
      )}
    </div>
  );
};

export default DescriptionPanel;

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