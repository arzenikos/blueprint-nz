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
