interface SectionArrowProps {
  color?: 'light' | 'dark';
}

export function SectionArrow({ color = 'dark' }: SectionArrowProps) {
  const colorClass = color === 'light' ? 'text-white' : 'text-primary';

  return (
    <div className="relative z-10 h-0" aria-hidden="true">
      <div className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 ${colorClass}`}>
        <svg
          className="h-9 w-9 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}
