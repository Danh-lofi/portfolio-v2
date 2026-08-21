import React from 'react';

interface SectionHeaderProps {
  number?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  tag,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {(number || tag) && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-widest uppercase bg-[#111113] border border-[#27272A] text-[#A1A1AA] mb-4 ${isCenter ? 'mx-auto' : ''}`}>
          {number && <span className="text-cyan-400 font-semibold">{number}</span>}
          {number && tag && <span className="text-[#27272A]">—</span>}
          {tag && <span className="text-[#FAFAFA]">{tag}</span>}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FAFAFA] font-sans">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
