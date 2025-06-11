import type { BlobProps } from '../types';

/**
 * Generate a random integer between min and max (inclusive)
 * @param min Minimum value
 * @param max Maximum value
 * @returns Random integer
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a unique name
 * @returns Unique name string
 */
export function uniqueName(): string {
  const adjectives = ['happy', 'sad', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'big', 'small'];
  const animals = ['dog', 'cat', 'bird', 'fish', 'lion', 'tiger', 'bear', 'elephant', 'monkey', 'zebra'];
  
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  
  return `${randomAdjective}-${randomAnimal}-${randomInt(100, 999)}`;
}

/**
 * Generate a random blob
 * @returns BlobProps
 */
export function generateBlob(): BlobProps {
  const colors = ['#3b82f6', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6'];
  
  return {
    parameters: {
      name: uniqueName(),
      color: colors[Math.floor(Math.random() * colors.length)],
      complexity: randomInt(3, 8),
      contrast: Math.random() * 10,
      seed: randomInt(1, 1000),
    },
  };
}
