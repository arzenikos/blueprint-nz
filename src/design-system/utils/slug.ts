export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s—+&]+/g, '-')
    .replace(/[’'"“”?!,.():;]+/g, '')
    .replace(/[^\w-]/g, '');
}
