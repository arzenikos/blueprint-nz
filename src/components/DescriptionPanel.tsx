
// src/components/DescriptionPanel.tsx
// import React from 'react';
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
