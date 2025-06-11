// <!-- Referenced by: pages/blobs/_components/ShapeEditor.tsx -->
import { useState, useEffect } from 'react';
import ShapePreview from './ShapePreview.tsx';
import { generateBlob } from '../../../lib/utils/helpers';
import type { BlobProps } from '../../../lib/types';

interface Props {
    lastMutationTime: number;
}

export default function StoredShapes(props: Props) {
    const { lastMutationTime } = props;
    const [shapes, setShapes] = useState<string[]>([]);
    const [selectedShape, setSelectedShape] = useState<string | null>(null);
    const [shapeData, setShapeData] = useState<BlobProps | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchShapes = async () => {
        try {
            const response = await fetch('/api/blobs');
            const data = await response.json();
            setShapes(data.keys || []);
        } catch (error) {
            console.error('Error fetching shapes:', error);
        }
    };

    const fetchShapeData = async (key: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/blobs/${key}`);
            const data = await response.json();
            setShapeData({
                parameters: data
            });
        } catch (error) {
            console.error('Error fetching shape data:', error);
            setShapeData(null);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchShapes();
    }, [lastMutationTime]);

    useEffect(() => {
        if (selectedShape) {
            fetchShapeData(selectedShape);
        } else {
            setShapeData(null);
        }
    }, [selectedShape]);

    return (
        <div className="flex flex-col">
            <h2 className="mb-4 text-xl text-center sm:text-xl">Stored Shapes</h2>
            <div className="w-full mb-6 bg-white rounded-lg">
                <div className="p-4 text-center text-gray-900 border-b border-gray-200 min-h-14">
                    {selectedShape ? <span>{selectedShape}</span> : <span>Select a shape</span>}
                </div>
                <div className="p-4 aspect-square text-primary">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="w-8 h-8 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
                        </div>
                    ) : shapeData ? (
                        <ShapePreview {...shapeData} />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">No shape selected</div>
                    )}
                </div>
            </div>

            <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto p-2 bg-gray-100 rounded-lg">
                {shapes.length === 0 ? (
                    <div className="w-full p-4 text-center text-gray-500">No shapes stored yet</div>
                ) : (
                    shapes.map((key) => (
                        <button
                            key={key}
                            onClick={() => setSelectedShape(key)}
                            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                                selectedShape === key ? 'bg-primary text-primary-content' : 'bg-white text-gray-800 hover:bg-gray-200'
                            }`}
                        >
                            {key}
                        </button>
                    ))
                )}
            </div>
        </div>
    );
}
