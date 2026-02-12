import logoBasildon from 'figma:asset/a78c27733a4be76807b2a8e8482773b888d23779.png';

export function Header() {
  return (
    <header className="pt-16 pb-12 px-6">
      {/* Logo container */}
      <div className="max-w-[240px] mx-auto mb-8">
        <img 
          src={logoBasildon} 
          alt="Basildon Listening Restobar" 
          className="w-full h-auto"
        />
      </div>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c5a059]/50" />
        <div className="w-1 h-1 rotate-45 bg-[#c5a059]" />
        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c5a059]/50" />
      </div>

      {/* Subtitle */}
      <p 
        className="text-center text-[#c5a059]/70 uppercase tracking-[0.3em]"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '10px',
          fontWeight: 300
        }}
      >
        Menu
      </p>
    </header>
  );
}
