import { getHighlighter } from '@/libs/shiki';
import { CodePreview } from './CodePreview';

interface GistContentProps {
  gistUrl: string;
}

export async function GistContent({ gistUrl }: GistContentProps) {
  const settingsResponse = await fetch(gistUrl);
  const settings = await settingsResponse.text();

  const highlighter = await getHighlighter();

  const code = highlighter.codeToHtml(settings, { lang: 'json' });

  return <CodePreview code={code} raw={settings} />;
}
