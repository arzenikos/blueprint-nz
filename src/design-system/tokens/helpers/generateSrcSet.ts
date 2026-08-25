export function generateSrcSet(
    basePath: string,
    extension: string,
    sizes: { width: number }[]
  ) {
    return sizes
      .map(size => `${basePath}-${size.width}w.${extension} ${size.width}w`)
      .join(', ');
  }
  