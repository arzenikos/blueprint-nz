import React, { useState } from 'react';

export default function ExpandUI({ branches }) {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex gap-6">
      {/* Left side: button and branches */}
      <div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Close' : 'Expand'}
        </button>

        {expanded && (
          <div className="mt-4 space-y-2">
            {branches.map((b, i) => (
              <button
                key={i}
                className="block bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 w-full text-left"
                onClick={() => setSelected(b)}
              >
                {b.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right side: details */}
      <div className="w-64 border-l pl-4 text-sm">
        {selected ? (
          <div>
            <h2 className="text-lg font-semibold mb-2">{selected.label}</h2>
            <p>{selected.detail}</p>
          </div>
        ) : (
          <p className="text-gray-500 italic">Select a branch</p>
        )}
      </div>
    </div>
  );
}
