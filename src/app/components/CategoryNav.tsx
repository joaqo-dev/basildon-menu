interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryNav({ categories, activeCategory, onCategoryChange }: CategoryNavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-[#c5a059]/15 px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <div
          className="flex gap-6 overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`
                relative whitespace-nowrap text-[9px] tracking-[0.25em] uppercase transition-all duration-500
                font-['Montserrat',sans-serif] font-light
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
