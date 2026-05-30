// <!-- Imported by: pages/blobs/_components/NewShape.tsx, pages/blobs/_components/StoredShapes.tsx -->
import { randomInt } from '../../../lib/utils/helpers';
import type { BlobProps } from '../../../lib/types';

export default function ShapePreview(props: BlobProps) {
    const { svgPath, parameters } = props;
    const gradientId = `gradient-${randomInt(10_000_000, 100_000_000)}`;

    return (
        <svg viewBox={`0 0 ${parameters.size} ${parameters.size}`} xmlns="http://www.w3.org/2000/svg" width="100%">
            <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#b9d6f2" />
                    <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
            </defs>
            {svgPath ? (
                <path d={svgPath} fill={`url(#${gradientId})`} />
            ) : (
                <path
                    d={generateBlobPath(parameters)}
                    fill={`url(#${gradientId})`}
                    transform={`translate(${parameters.size / 2}, ${parameters.size / 2})`}
                />
            )}
        </svg>
    );
}

function generateBlobPath(parameters) {
    const { seed, extraPoints, randomness, size } = parameters;
    const points = 5 + extraPoints;
    const angle = (Math.PI * 2) / points;
    const radius = size / 3;
    
    // Use seed to create deterministic randomness
    const rng = mulberry32(seed);
    
    // Generate points around a circle with some randomness
    const blobPoints = [];
    for (let i = 0; i < points; i++) {
        const theta = i * angle;
        const randRadius = radius * (1 + (rng() - 0.5) * randomness * 0.2);
        const x = Math.cos(theta) * randRadius;
        const y = Math.sin(theta) * randRadius;
        blobPoints.push([x, y]);
    }
    
    // Create SVG path using cubic bezier curves
    let path = `M ${blobPoints[0][0]},${blobPoints[0][1]}`;
    
    for (let i = 0; i < points; i++) {
        const p0 = blobPoints[i];
        const p1 = blobPoints[(i + 1) % points];
        
        // Control points
        const cp1x = p0[0] + (p1[0] - p0[0]) * 0.5 - (p1[1] - p0[1]) * 0.2;
        const cp1y = p0[1] + (p1[1] - p0[1]) * 0.5 + (p1[0] - p0[0]) * 0.2;
        const cp2x = p1[0] - (p1[0] - p0[0]) * 0.5 - (p1[1] - p0[1]) * 0.2;
        const cp2y = p1[1] - (p1[1] - p0[1]) * 0.5 + (p1[0] - p0[0]) * 0.2;
        
        path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p1[0]},${p1[1]}`;
    }
    
    path += ' Z';
    return path;
}

// Simple seeded random number generator
function mulberry32(seed) {
    return function() {
        let t = seed += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
