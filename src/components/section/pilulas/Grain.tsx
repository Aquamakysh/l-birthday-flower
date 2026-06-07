export function Grain() {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none fixed inset-0'
      style={{ mixBlendMode: 'multiply', opacity: 0.11, zIndex: 0 }}
    >
      <svg
        width='100%'
        height='100%'
        xmlns='http://www.w3.org/2000/svg'
      >
        <filter id='pipulas-grain'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.68'
            numOctaves='4'
            stitchTiles='stitch'
          />
          <feColorMatrix type='saturate' values='0' />
        </filter>
        <rect
          width='100%'
          height='100%'
          filter='url(#pipulas-grain)'
        />
      </svg>
    </div>
  )
}
