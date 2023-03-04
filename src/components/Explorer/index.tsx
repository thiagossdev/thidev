import {
  AlertCircle,
  Cog,
  Cpu,
  FileJson,
  Joystick,
  MoreHorizontal,
  Terminal,
} from 'lucide-react';
import { OpenFilesSubMenu } from '../OpenFilesTabs/OpenFilesSubMenu';
import { File } from './File';
import { Folder } from './Folder';
import { SubMenu } from './SubMenu';

export type FileType = {
  title: string;
  icon: React.ReactNode;
};

export const explorerFiles: Record<string, FileType> = {
  '/vscode/settings': {
    icon: <FileJson size={16} />,
    title: 'settings.json',
  },
  '/vscode/extensions': {
    icon: <FileJson size={16} />,
    title: 'extensions.json',
  },
  '/terminal/general': {
    icon: <Terminal size={16} />,
    title: 'general.md',
  },
  '/terminal/zsh': { icon: <Cog size={16} />, title: '.zshrc' },
  '/others/dev-setup': { icon: <Cpu size={16} />, title: 'dev.setup.md' },
  '/others/gaming-setup': {
    icon: <Joystick size={16} />,
    title: 'gaming.setup.md',
  },
  '/readme': {
    icon: <AlertCircle size={16} />,
    title: 'README.md',
  },
};

export function Explorer() {
  return (
    <div className="py-2 px-4 text-[#8F8CA8]">
      <strong className="font-medium text-xs pl-2 flex items-center justify-between">
        EXPLORER
        <MoreHorizontal size={16} strokeWidth={1.5} />
      </strong>

      <nav className="mt-4 flex flex-col">
        <SubMenu title="OPEN EDITORS">
          <OpenFilesSubMenu />
        </SubMenu>

        <SubMenu defaultOpen title="THI-DEV">
          <Folder defaultOpen title="Visual Studio Code">
            <File href="/vscode/settings">
              <FileJson size={16} />
              settings.json
            </File>
            <File href="/vscode/extensions">
              <FileJson size={16} />
              extensions.json
            </File>
          </Folder>

          <Folder title="Terminal">
            <File href="/terminal/general">
              <Terminal size={16} />
              general.md
            </File>
            <File href="/terminal/zsh">
              <Cog size={16} />
              .zshrc
            </File>
          </Folder>

          <Folder title="Others">
            <File href="/others/dev-setup">
              <Cpu size={16} />
              dev.setup.md
            </File>
            <File href="/others/gaming-setup">
              <Joystick size={16} />
              gaming.setup.md
            </File>
          </Folder>

          <File href="/readme">
            <AlertCircle size={16} />
            README.md
          </File>
        </SubMenu>
      </nav>
    </div>
  );
}
