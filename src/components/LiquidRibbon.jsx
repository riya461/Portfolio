const WAVE_A =
  'M0,110 C150,60 450,160 600,110 C750,160 1050,60 1200,110 C1350,60 1650,160 1800,110 C1950,160 2250,60 2400,110 C2550,60 2850,160 3000,110 C3150,160 3450,60 3600,110 C3750,60 4050,160 4200,110 C4350,160 4650,60 4800,110 L4800,220 L0,220 Z';

const WAVE_B =
  'M0,120 C150,85 450,155 600,120 C750,155 1050,85 1200,120 C1350,85 1650,155 1800,120 C1950,155 2250,85 2400,120 C2550,85 2850,155 3000,120 C3150,155 3450,85 3600,120 C3750,85 4050,155 4200,120 C4350,155 4650,85 4800,120 L4800,220 L0,220 Z';

// eslint-disable-next-line react/prop-types
const LiquidRibbon = ({ className = '', height = 150, prefix = 'rb' }) => {
  const metal = `${prefix}-metal`;
  const gloss = `${prefix}-gloss`;

  return (
    <div className={`ribbon-container ${className}`} style={{ height }} aria-hidden="true">
      <svg className="ribbon-svg" viewBox="0 0 2400 220" preserveAspectRatio="none">
        <defs>
          <linearGradient id={metal} x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#0c2f6e" />
            <stop offset="12%" stopColor="#1e40af" />
            <stop offset="28%" stopColor="#5b21b6" />
            <stop offset="42%" stopColor="#a21caf" />
            <stop offset="55%" stopColor="#f43f5e" />
            <stop offset="70%" stopColor="#ff6b00" />
            <stop offset="85%" stopColor="#ffd700" />
            <stop offset="100%" stopColor="#0c2f6e" />
          </linearGradient>
          <linearGradient id={gloss} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="2400" height="220" fill="#0a0a10" opacity="0.92" />

        <g className="ribbon-layer ribbon-flow-b">
          <path d={WAVE_B} fill={`url(#${metal})`} opacity="0.45" />
        </g>

        <g className="ribbon-layer ribbon-flow-a">
          <path d={WAVE_A} fill={`url(#${metal})`} />
        </g>

        <g className="ribbon-layer ribbon-flow-c">
          <path d={WAVE_A} fill={`url(#${gloss})`} />
        </g>
      </svg>
    </div>
  );
};

export default LiquidRibbon;
