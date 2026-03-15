interface FrameContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function FrameContainer({ children, className = "" }: FrameContainerProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Simple elegant border frame */}
      <div className="relative border border-white/30 bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-sm transition-all duration-300 group-hover:border-white/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
        {/* Top decorative element */}
        <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 group-hover:via-white group-hover:w-32" />
        
        {/* Content */}
        <div className="px-6 py-8">
          {children}
        </div>

        {/* Bottom decorative element */}
        <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-300 group-hover:via-white/70 group-hover:w-20" />
      </div>
    </div>
  );
}
