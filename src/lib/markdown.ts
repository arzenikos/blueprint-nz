/** Match typical GitHub / rehype-slug heading ids. */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[''"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function headingsFromMarkdown(body: string): { id: string; label: string }[] {
  return [...body.matchAll(/^##\s+(.+?)\s*$/gm)].map(([, label]) => ({
    id: slugifyHeading(label),
    label: label.trim(),
  }));
}
