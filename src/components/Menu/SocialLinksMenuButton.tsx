'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  Github, Headphones, Instagram,
  Linkedin, Twitch, Twitter,
  User
} from 'lucide-react';
import { MenuButton } from './MenuButton';

const socialLinks = [
  {
    name: 'github',
    url: 'https://github.com/thiagossdev',
    icon: <Github size={14} />,
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/thiagossdev',
    icon: <Instagram size={14} />,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/thiagosousasantos',
    icon: <Linkedin size={14} />,
  },
  {
    name: 'spotify',
    url: 'https://open.spotify.com/user/thiagos.xsantos',
    icon: <Headphones size={14} />,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/thiagossdev',
    icon: <Twitter size={14} />,
  },
  {
    name: 'twitch',
    url: 'https://www.twitch.tv/dextherz',
    icon: <Twitch size={14} />,
  },
];

export function SocialLinksMenuButton() {
  return (
    <div className="relative">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger aria-label="Redes sociais" className="w-full">
          <MenuButton icon={User} />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            side="right"
            className="w-full max-h-[260px] bg-[#2a273f] z-50 flex flex-col rounded-lg overflow-y-auto scrollbar-none"
          >
            {socialLinks.map((socialItem) => {
              return (
                <DropdownMenu.Item
                  key={socialItem.url}
                  className="outline-none"
                >
                  <a
                    href={socialItem.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#E0DEF2] flex items-center gap-2 text-sm px-4 py-3 hover:bg-[#454066]"
                  >
                    {socialItem.icon}
                    {socialItem.name}
                  </a>
                </DropdownMenu.Item>
              );
            })}
            <DropdownMenu.Arrow className="fill-[#2a273f]" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      <span className="absolute bottom-1 right-0 text-center text-[.75rem] w-4 h-4 rounded-full bg-pink-500">
        {socialLinks.length}
      </span>
    </div>
  );
}
