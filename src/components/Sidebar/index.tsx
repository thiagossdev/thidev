'use client';

import { Menu } from '@/components/Menu';
import { Explorer } from '@/components/Explorer';
import { useState } from 'react';

interface SidebarProps {
  open?: boolean | null;
}

export function Sidebar({ open = null }: SidebarProps) {
  const defaultOpen =
    open === null && window.matchMedia('(min-width: 768px)').matches;

  console.log(
    '🚀 ~ file: index.tsx:34 ~ toggleExplorerVisibility ~ open:',
    defaultOpen,
  );
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <>
      <Menu open={isOpen} onOpenChange={setIsOpen} />
      <Explorer open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
