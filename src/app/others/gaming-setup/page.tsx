import { CodePreview } from '@/components/CodePreview';
import { getHighlighter } from '@/libs/shiki';

export const metadata = {
  title: 'Gaming Setup',
};

const markdown = `
# Gaming Setup

- Lenovo Legion 5i
- Intel Core i7-10750 4.2Ghz
- 2x HyperX Fury 32GB 3200Mhz
- LENOVO LNVNB161216 Motherboard
- 2x SSD 480GB NVMe
- NVIDIA GeForce RTX 2060 6G


## Peripherals

- HP Gamer USB M260 Mouse
- Keychron K3 V2 Low Profile (Brown Switch)
- Lenovo G25 FHD 24.5" 144hz 1ms FreeSync
- JBL Quantum 800 Over Ear Headset

That's it, nothing more.
`.trim();

export default async function GamingSetup() {
  const highlighter = await getHighlighter();

  const code = highlighter.codeToHtml(markdown, { lang: 'md' });

  return <CodePreview code={code} />;
}
