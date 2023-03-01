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

export function Menu() {
  return (
    <div className="flex flex-col justify-between bg-purple-500">
      <div className="flex flex-col">
        <Link href="/">
          {' '}
          <MenuButton icon={Files} isActive />
        </Link>
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
