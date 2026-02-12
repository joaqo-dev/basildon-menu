import { FrameContainer } from './FrameContainer';

interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
}

export function MenuItem({ name, description, price }: MenuItemProps) {
  return (
    <div className="group cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]">
      <FrameContainer>
        <div className="space-y-4">
          {/* Header with name and price */}
          <div className="flex items-start justify-between gap-6">
            <h3 
              className="flex-1 text-[#c5a059] uppercase tracking-[0.15em] leading-snug transition-all duration-300 group-hover:text-[#d4b76a] group-hover:tracking-[0.18em]"
              style={{
                fontFamily: 'HopsAndBarley, serif',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              {name}
            </h3>
            
            {price && (
              <div 
                className="text-[#c5a059] whitespace-nowrap tracking-wide transition-all duration-300 group-hover:text-[#d4b76a]"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400
                }}
              >
                {price}
              </div>
            )}
          </div>

          {/* Description */}
          {description && (
            <p 
              className="text-[#d4adad]/75 leading-relaxed transition-all duration-300 group-hover:text-[#d4adad]/90"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: 300,
                lineHeight: '1.7'
              }}
            >
              {description}
            </p>
          )}
        </div>
      </FrameContainer>
    </div>
  );
}
