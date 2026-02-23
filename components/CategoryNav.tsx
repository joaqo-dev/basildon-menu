'use client';

interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryNav({ categories, activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-[#c5a059]/15 px-4 py-6 pb-8">
      <div className="max-w-2xl mx-auto relative">
        {/* Left fade indicator */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/95 to-transparent pointer-events-none z-10" />
        
        {/* Right fade indicator */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/95 to-transparent pointer-events-none z-10" />
        
        {/* Scroll hint chevron - right side */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none z-20 animate-pulse">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            className="text-[#c5a059]/60"
          >
            <path 
              d="M6 4L10 8L6 12" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        
        <div
          className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide px-12"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            overscrollBehaviorX: 'contain',
            overscrollBehaviorY: 'none'
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`
                relative whitespace-nowrap text-[11px] tracking-[0.25em] uppercase transition-all duration-500
                font-['Montserrat',sans-serif] font-light pb-3
                ${
                  activeCategory === category
                    ? 'text-[#c5a059]'
                    : 'text-[#d4adad]/40 hover:text-[#d4adad]/70'
                }
              `}
            >
              {category}
              {/* Active underline */}
              {activeCategory === category && (
                <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
