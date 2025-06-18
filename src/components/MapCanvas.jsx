import { useEffect, useState } from 'react';

const nodes = [
  { x: 2, y: 2, description: 'You found the Forest Node 🌲' },
  { x: 4, y: 1, description: 'This is the Mountain Node ⛰️' },
];

const gridSize = 6;

export default function MapCanvas() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setPos((prev) => {
        const newPos = { ...prev };
        if (e.key === 'ArrowUp') newPos.y = Math.max(0, newPos.y - 1);
        if (e.key === 'ArrowDown') newPos.y = Math.min(gridSize - 1, newPos.y + 1);
        if (e.key === 'ArrowLeft') newPos.x = Math.max(0, newPos.x - 1);
        if (e.key === 'ArrowRight') newPos.x = Math.min(gridSize - 1, newPos.x + 1);
        return newPos;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const found = nodes.find((node) => node.x === pos.x && node.y === pos.y);
    setActiveNode(found || null);
  }, [pos]);

  return (
    <div className="flex">
      {/* Map Grid */}
      <div className="grid grid-cols-6 gap-1 w-fit p-2">
        {[...Array(gridSize * gridSize)].map((_, i) => {
          const x = i % gridSize;
          const y = Math.floor(i / gridSize);
          const isPlayer = pos.x === x && pos.y === y;
          const isNode = nodes.find((n) => n.x === x && n.y === y);

          return (
            <div
              key={i}
              className={`w-12 h-12 flex items-center justify-center border
                ${isPlayer ? 'bg-blue-500' : isNode ? 'bg-green-300' : 'bg-gray-100'}
              `}
            >
              {isPlayer ? '🧍' : isNode ? '📍' : ''}
            </div>
          );
        })}
      </div>

      {/* Description Panel */}
      <div className="ml-4 w-64 min-h-[200px] p-4 border rounded bg-white shadow">
        {activeNode ? (
          <>
            <h2 className="font-bold text-lg mb-2">Node Info</h2>
            <p>{activeNode.description}</p>
          </>
        ) : (
          <p className="text-gray-400 italic">Move to a node to see info</p>
        )}
      </div>
    </div>
  );
}
