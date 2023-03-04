import { CodePreview } from '@/components/CodePreview';
import { getHighlighter } from '@/libs/shiki';

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Terminal',
};

const markdown = `
# General

Currently I'm using the combo Zsh + Powerlevel10k in my terminal.

Zsh Shell: https://www.zsh.org
Powerlevel10k: https://github.com/romkatv/powerlevel10k

---

I'm also using Terminal as my terminal emulator in Win11 and Konsole in Manjaro KDE.

Windows Terminal: https://www.microsoft.com/store/apps/9n0dx20hk701
Konsole: https://konsole.kde.org

---

For the theme, I created a gist with my Powerlevel10k choices: 

Theme: https://gist.github.com/thiagossdev/6359b04760061479f7f5be3b45ab79ae

---

For install and update plugins, I use Zinit, a flexible and fast ZSH plugin manager.

Zinit: https://github.com/zdharma-continuum/zinit
`.trim();

export default async function General() {
  const highlighter = await getHighlighter();

  const code = highlighter.codeToHtml(markdown, { lang: 'md' });

  return <CodePreview code={code} />;
}
