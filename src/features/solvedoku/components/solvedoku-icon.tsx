import type { IconProps } from "../../../types";

export function SolvedokuIcon({ size = 'size-128', classes = ' ' }: IconProps) {
  return (
    <svg
      viewBox='0 0 128 128'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${size} ${classes}`}>
      <defs>
        {/* Gradient for rounded container for icon */}
        <linearGradient
          id='solvedokuBackgroundGradient'
          x1='0%'
          y1='0%'
          x2='100%'
          y2='100%'>
          <stop
            offset='0%'
            stopColor='#4F46E5'
          />
          <stop
            offset='50%'
            stopColor='#7C3AED'
          />
          <stop
            offset='100%'
            stopColor='#EC4899'
          />
        </linearGradient>

        {/* Gradient for sudoku board */}
        <linearGradient
          id='gridGradient'
          x1='0%'
          y1='0%'
          x2='0%'
          y2='100%'>
          <stop
            offset='0%'
            stopColor='#FFFFFF'
            stopOpacity='0.9'
          />
          <stop
            offset='100%'
            stopColor='#FFFFFF'
            stopOpacity='0.7'
          />
        </linearGradient>

        {/* Gradient for magnifying glass components */}
        <linearGradient
          id='magnifyingGlass'
          x1='0%'
          y1='0%'
          x2='100%'
          y2='100%'>
          <stop
            offset='0%'
            stopColor='#FBBF24'
          />
          <stop
            offset='100%'
            stopColor='#F59E0B'
          />
        </linearGradient>

        {/* Magnifying Glass Shadow  */}
        <filter id='glassEffect'>
          <feDropShadow
            dx='1'
            dy='1'
            stdDeviation='2'
            floodOpacity='0.2'
          />
        </filter>
      </defs>

      {/* Primary BG Rectangle Shape */}
      <rect
        x='4'
        y='4'
        width='120'
        height='120'
        rx='24'
        ry='24'
        fill='url(#solvedokuBackgroundGradient)'
        filter='url(#shadow)'
      />

      {/* Inner highlight for depth */}
      <rect
        x='6'
        y='6'
        width='116'
        height='116'
        rx='22'
        ry='22'
        fill='none'
        stroke='rgba(255,255,255,0.2)'
        strokeWidth='1'
      />

      {/* Sudoku Grid Background */}
      <rect
        x='24'
        y='24'
        width='80'
        height='80'
        rx='8'
        ry='8'
        fill='url(#gridGradient)'
        opacity='0.9'
      />

      {/* Grid Lines - Major (3x3 sections) */}
      <g
        stroke='rgba(75, 85, 99, 0.6)'
        strokeWidth='2'
        fill='none'>
        {/* Vertical major lines */}
        <line
          x1='50.67'
          y1='24'
          x2='50.67'
          y2='104'
        />
        <line
          x1='77.33'
          y1='24'
          x2='77.33'
          y2='104'
        />
        {/* Horizontal major lines */}
        <line
          x1='24'
          y1='50.67'
          x2='104'
          y2='50.67'
        />
        <line
          x1='24'
          y1='77.33'
          x2='104'
          y2='77.33'
        />
      </g>

      {/* Grid Lines - Minor */}
      <g
        stroke='rgba(75, 85, 99, 0.3)'
        strokeWidth='0.8'
        fill='none'>
        {/* Vertical minor lines */}
        <line
          x1='32.89'
          y1='24'
          x2='32.89'
          y2='104'
        />
        <line
          x1='41.78'
          y1='24'
          x2='41.78'
          y2='104'
        />
        <line
          x1='59.56'
          y1='24'
          x2='59.56'
          y2='104'
        />
        <line
          x1='68.44'
          y1='24'
          x2='68.44'
          y2='104'
        />
        <line
          x1='86.22'
          y1='24'
          x2='86.22'
          y2='104'
        />
        <line
          x1='95.11'
          y1='24'
          x2='95.11'
          y2='104'
        />
        {/* Horizontal minor lines */}
        <line
          x1='24'
          y1='32.89'
          x2='104'
          y2='32.89'
        />
        <line
          x1='24'
          y1='41.78'
          x2='104'
          y2='41.78'
        />
        <line
          x1='24'
          y1='59.56'
          x2='104'
          y2='59.56'
        />
        <line
          x1='24'
          y1='68.44'
          x2='104'
          y2='68.44'
        />
        <line
          x1='24'
          y1='86.22'
          x2='104'
          y2='86.22'
        />
        <line
          x1='24'
          y1='95.11'
          x2='104'
          y2='95.11'
        />
      </g>

      {/* Filled Cells  */}
      <g
        fill='#1F2937'
        fontFamily='system-ui, -apple-system, sans-serif'
        fontSize='8'
        fontWeight='500'
        textAnchor='middle'
        dominantBaseline='central'>
        {/* Top row */}
        <text
          x='28.44'
          y='28.44'>
          5
        </text>
        <text
          x='54.67'
          y='28.44'>
          7
        </text>
        <text
          x='90.67'
          y='28.44'>
          1
        </text>

        {/* Second row */}
        <text
          x='63.56'
          y='37.33'>
          1
        </text>
        <text
          x='99.56'
          y='37.33'>
          5
        </text>

        {/* Third row */}
        <text
          x='28.44'
          y='46.22'>
          1
        </text>
        <text
          x='72.89'
          y='46.22'>
          5
        </text>

        {/* Fourth row */}
        <text
          x='37.33'
          y='54.67'>
          8
        </text>
        <text
          x='90.67'
          y='54.67'>
          3
        </text>

        {/* Fifth row */}
        <text
          x='46.22'
          y='63.56'>
          4
        </text>
        <text
          x='99.56'
          y='63.56'>
          7
        </text>

        {/* Sixth row */}
        <text
          x='54.67'
          y='72.89'>
          3
        </text>
        <text
          x='81.78'
          y='72.89'>
          2
        </text>

        {/* Bottom rows */}
        <text
          x='37.33'
          y='81.78'>
          9
        </text>
        <text
          x='72.89'
          y='90.67'>
          6
        </text>
        <text
          x='99.56'
          y='99.56'>
          8
        </text>
      </g>

      {/* Magnifying Glass - positioned over an empty cell */}
      <g transform='translate(75, 55)'>
        {/* Lens */}
        <circle
          cx='0'
          cy='0'
          r='8'
          fill='none'
          stroke='url(#magnifyingGlass)'
          strokeWidth='2'
          filter='url(#glassEffect)'
        />

        {/* Glass reflection effect */}
        <circle
          cx='-2'
          cy='-2'
          r='3'
          fill='rgba(255,255,255,0.6)'
        />

        {/* Magnifying Glass Handle */}
        <line
          x1='6'
          y1='6'
          x2='12'
          y2='12'
          stroke='url(#magnifyingGlass)'
          strokeWidth='2.5'
          strokeLinecap='round'
          filter='url(#glassEffect)'
        />

      </g>
    </svg>
  );
}
