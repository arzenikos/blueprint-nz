// import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';
// import type { BlobProps } from '../types';

// /**
//  * Generate a random integer between min and max (inclusive)
//  * @param min Minimum value
//  * @param max Maximum value
//  * @returns Random integer
//  */
// export function randomInt(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// /**
//  * Generate a unique name
//  * @returns Unique name string
//  */
// export function uniqueName(): string {
//   const config = {
//     dictionaries: [adjectives, animals],
//     separator: '-',
//     length: 2
//   };
//   return uniqueNamesGenerator(config) + '-' + randomInt(100, 999);
// }

// /**
//  * Generate a random blob
//  * @returns BlobProps
//  */
// export function generateBlob(): BlobProps {
//   const name = uniqueNamesGenerator({
//     dictionaries: [adjectives, colors, animals],
//     separator: '-',
//     style: 'lowerCase',
//   });

//   return {
//     parameters: {
//       name,
//       seed: randomInt(1, 1000),
//       extraPoints: randomInt(3, 8),
//       randomness: Math.random() * 10,
//       size: randomInt(100, 400),
//     },
//   };
// }
