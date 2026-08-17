export function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 480 560"
      className="h-auto w-full max-w-md text-navy"
      role="img"
      aria-label="전략 방향성을 시각화한 편집형 그래픽"
    >
      <rect
        x="0.5"
        y="0.5"
        width="479"
        height="559"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.18"
      />

      {Array.from({ length: 5 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          x2="480"
          y1={112 * (i + 1)}
          y2={112 * (i + 1)}
          stroke="currentColor"
          strokeOpacity="0.1"
        />
      ))}
      {Array.from({ length: 3 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={120 * (i + 1)}
          x2={120 * (i + 1)}
          y1="0"
          y2="560"
          stroke="currentColor"
          strokeOpacity="0.1"
        />
      ))}

      <text
        x="32"
        y="88"
        className="fill-current font-serif italic"
        fontSize="120"
        opacity="0.06"
      >
        N
      </text>

      <polygon
        points="48,480 48,440 156,392 264,300 348,208 432,120 432,480"
        fill="var(--color-blue-light)"
        fillOpacity="0.08"
      />

      <polyline
        points="48,440 156,392 264,300 348,208 432,120"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {[
        [48, 440],
        [156, 392],
        [264, 300],
        [348, 208],
        [432, 120],
      ].map(([x, y], i) => (
        <g key={`${x}-${y}`}>
          {i === 4 && (
            <circle
              cx={x}
              cy={y}
              r="11"
              fill="var(--color-blue-light)"
              fillOpacity="0.16"
            />
          )}
          <circle
            cx={x}
            cy={y}
            r={i === 4 ? 5 : 3}
            fill={i === 4 ? "var(--color-blue-light)" : "var(--color-surface)"}
            stroke={i === 4 ? "var(--color-blue-light)" : "currentColor"}
            strokeWidth="1.2"
          />
        </g>
      ))}

      <line
        x1="48"
        y1="480"
        x2="432"
        y2="480"
        stroke="currentColor"
        strokeOpacity="0.3"
      />
      <text
        x="48"
        y="508"
        className="fill-current"
        fontSize="11"
        letterSpacing="2"
        opacity="0.55"
      >
        DEFINE — ANALYZE — DESIGN — DELIVER
      </text>

      <text
        x="48"
        y="60"
        className="fill-current"
        fontSize="11"
        letterSpacing="2"
        opacity="0.55"
      >
        FY26 STRATEGIC TRAJECTORY
      </text>
    </svg>
  );
}
