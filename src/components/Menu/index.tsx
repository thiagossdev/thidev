import {
  Bug,
  Cog,
  Files,
  FlaskConical,
  GitFork,
  Monitor,
  Puzzle,
  Search,
} from 'lucide-react';
import Link from 'next/link';
import { MenuButton } from './MenuButton';
import { SocialLinksMenuButton } from './SocialLinksMenuButton';

interface MenuProps {
  open?: boolean;
  onOpenChange?(open: boolean): void;
}

export function Menu({ open, onOpenChange }: MenuProps) {
  function toggleExplorerVisibility() {
    if (onOpenChange) onOpenChange(!open);
  }

  return (
    <div className="h-full min-w-[3.5rem]  bg-purple-500 flex flex-col justify-between z-20">
      <div className="flex flex-col">
        <button className="cursor-pointer" onClick={toggleExplorerVisibility}>
          <MenuButton icon={Files} isActive />
        </button>
        <MenuButton icon={Search} />
        <MenuButton icon={GitFork} />
        <MenuButton icon={Bug} />
        <MenuButton icon={Puzzle} />
        <MenuButton icon={Monitor} />
        <MenuButton icon={FlaskConical} />
      </div>
      <div className="flex flex-col items-center">
        <SocialLinksMenuButton />
        <MenuButton icon={Cog} />
      </div>
    </div>
  );
}
