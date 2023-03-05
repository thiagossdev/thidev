import shiki, { IShikiTheme } from 'shiki';
import themeRaw from '@/themes/omni.json';

export async function getHighlighter() {
  const theme = themeRaw as IShikiTheme;
  const highlighter = shiki.getHighlighter({
    theme,
  });

  return highlighter;
}
