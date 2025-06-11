// Type definitions for the application

// Blob shape properties
export interface BlobProps {
  parameters?: {
    name: string;
    color: string;
    complexity: number;
    contrast: number;
    seed: number;
  };
  path?: string;
}
