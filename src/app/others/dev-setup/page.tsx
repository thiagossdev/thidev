import { CodePreview } from '@/components/CodePreview';
import { getHighlighter } from '@/libs/shiki';

export const metadata = {
  title: 'Dev Setup',
};

const markdown = `
# Dev Setup

- Lenovo Legion 5i (64GB RAM)
- Lenovo G25 FHD 24.5" FreeSync Display
- Keyboards:
  - Keychron K3 V2 Low Profile (Brown Switch)
  - CSTC40 - OEM Keycaps (Gateron Kangaroo Ink Tactile Switch)
- SO:
  - Manjaro KDE Plasma
  - Windows 11 with Arch Linux in WSL2

That's it, nothing more.
`.trim();

export default async function DevSetup() {
  const highlighter = await getHighlighter();

  const code = highlighter.codeToHtml(markdown, { lang: 'md' });

  return <CodePreview code={code} />;
}
