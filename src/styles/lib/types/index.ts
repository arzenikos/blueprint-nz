// Not imported by any file
export interface BlobParameters {
  name: string;
  seed: number;
  extraPoints: number;
  randomness: number;
  size: number;
}

export interface BlobProps {
  parameters?: BlobParameters;
}

// Legacy types kept for compatibility
export type BlobParameterProps = {
  seed: number;
  size: number;
  edges: number;
  growth: number;
  name: string;
  colors: string[];
};

export type LegacyBlobProps = {
  svgPath: string;
  parameters: BlobParameterProps;
};
