import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline' | 'subtle';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = size === 'sm' 
    ? 'px-2 py-0.5 text-xs' 
    : 'px-2.5 py-1 text-xs sm:text-sm';

  const variantClasses = {
    default: 'bg-[#111113] text-[#A1A1AA] border border-[#27272A] hover:border-cyan-500/40 hover:text-[#FAFAFA]',
    accent: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-medium',
    outline: 'bg-transparent text-[#A1A1AA] border border-[#27272A] hover:text-[#FAFAFA] hover:border-zinc-600',
    subtle: 'bg-[#18181B] text-[#A1A1AA] border border-[#27272A]'
  }[variant];

  return (
    <span className={`inline-flex items-center rounded-md font-mono tracking-tight transition-colors duration-150 ${sizeClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
};
