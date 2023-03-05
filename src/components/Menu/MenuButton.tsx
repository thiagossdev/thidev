import type { Icon } from 'lucide-react';

interface MenuButtonProps {
  icon?: Icon;
  isActive?: boolean;
}

export function MenuButton({ icon: Icon, isActive = false }: MenuButtonProps) {
  return (
    <div
      data-active={isActive}
      className="h-12 flex justify-center items-center border-l-2 border-transparent min-[868px]:data-[active=true]:border-pink-500 data-[active=true]:text-[#E0DEF2] text-[#8F8CA8]"
    >
      {Icon && <Icon strokeWidth={1.5} size={28} />}
    </div>
  );
}
