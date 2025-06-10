import { getHighlighter } from 'shiki';

export async function getHighlighterInstance() {
  return await getHighlighter({ theme: 'github-dark' });
}
