import { Kalam } from 'next/font/google'
import Link from 'next/link'

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})
const font = kalam.style.fontFamily
const inkColor = '#3a1a08'
const accent = '#8a5530'

const pages = [
  {
    href: '/flor',
    symbol: '🌸',
    label: 'A Flor',
    description: 'Uma flor especial pra ti'
  },
  {
    href: '/acarta',
    symbol: '💌',
    label: 'A Carta',
    description: 'Primavera Distante'
  },
  {
    href: '/chocolates',
    symbol: '🍫',
    label: 'Chocolates',
    description: 'Surpresa de Páscoa'
  },
  {
    href: '/gauchita',
    symbol: '🕯️',
    label: 'Gauchita',
    description: 'Poema que me lembra de ti'
  },
  {
    href: '/larissa',
    symbol: '✨',
    label: 'Larissa',
    description: 'Teu lindo nome em flores'
  },
  {
    href: '/revolucao',
    symbol: '🌟',
    label: 'Revolução',
    description: 'Há 10 anos te conheci...'
  },
  {
    href: '/jogos',
    symbol: '🎮',
    label: 'Jogos',
    description: 'Pra se divertir'
  }
]

export function HomeTemplate() {
  return (
    <main
      className='relative min-h-dvh w-dvw flex flex-col items-center justify-center overflow-x-hidden'
      style={{
        backgroundColor: '#fdf4ec',
        backgroundImage: [
          'radial-gradient(ellipse at 15% 10%, rgba(220,155,90,0.20) 0%, transparent 45%)',
          'radial-gradient(ellipse at 85% 88%, rgba(210,135,70,0.16) 0%, transparent 40%)',
          'radial-gradient(ellipse at 50% 50%, rgba(255,240,215,0.45) 0%, transparent 65%)'
        ].join(',')
      }}
    >
      {/* Grain */}
      <div
        aria-hidden='true'
        className='pointer-events-none fixed inset-0'
        style={{ mixBlendMode: 'multiply', opacity: 0.13, zIndex: 0 }}
      >
        <svg
          width='100%'
          height='100%'
          xmlns='http://www.w3.org/2000/svg'
        >
          <filter id='home-grain'>
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
            filter='url(#home-grain)'
          />
        </svg>
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center px-6 py-14 gap-10 w-full max-w-md'>
        {/* Header */}
        <div className='flex flex-col items-center gap-2 text-center'>
          <p
            style={{
              fontFamily: font,
              color: accent,
              fontSize: '1rem',
              letterSpacing: '0.18em',
              opacity: 0.85,
              fontWeight: 300
            }}
          >
            com muito carinho,
          </p>
          <h1
            style={{
              fontFamily: font,
              color: inkColor,
              fontSize: '3.6rem',
              fontWeight: 700,
              lineHeight: 1.05
            }}
          >
            Para Larissa
          </h1>
          <svg
            width='210'
            height='12'
            viewBox='0 0 210 12'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M 4,9 C 40,3 85,10 105,7 C 125,4 165,9 206,6'
              stroke={accent}
              strokeWidth='1.5'
              strokeLinecap='round'
              fill='none'
              opacity='0.55'
            />
            <path
              d='M 18,11 C 55,9 95,11 135,10 C 165,9 190,11 207,9'
              stroke={accent}
              strokeWidth='0.6'
              strokeLinecap='round'
              fill='none'
              opacity='0.3'
            />
          </svg>
          <p
            style={{
              fontFamily: font,
              color: accent,
              fontSize: '1rem',
              marginTop: '0.4rem',
              opacity: 0.75,
              fontWeight: 300
            }}
          >
            escolha por onde começar ♡
          </p>
        </div>

        {/* Navigation cards */}
        <div className='grid grid-cols-2 gap-3.5 w-full'>
          {pages.map((page, i) => {
            const isLast =
              i === pages.length - 1 && pages.length % 2 !== 0
            return (
              <Link
                key={page.href}
                href={page.href}
                className='flex flex-col items-center gap-2.5 rounded-2xl px-4 py-5 text-center transition-transform duration-300 hover:scale-[1.04] active:scale-[0.97]'
                style={{
                  background: 'rgba(255,251,245,0.84)',
                  border: '1px solid rgba(170,110,55,0.20)',
                  boxShadow:
                    '0 2px 18px rgba(110,60,15,0.09), inset 0 1px 0 rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(4px)',
                  gridColumn: isLast ? '1 / -1' : undefined,
                  maxWidth: isLast
                    ? 'calc(50% - 0.4375rem)'
                    : undefined,
                  margin: isLast ? '0 auto' : undefined,
                  width: isLast ? '100%' : undefined
                }}
              >
                <span style={{ fontSize: '2rem', lineHeight: 1 }}>
                  {page.symbol}
                </span>
                <span
                  style={{
                    fontFamily: font,
                    color: inkColor,
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    lineHeight: 1.2
                  }}
                >
                  {page.label}
                </span>
                <span
                  style={{
                    fontFamily: font,
                    color: accent,
                    fontSize: '0.82rem',
                    opacity: 0.78,
                    fontWeight: 300,
                    lineHeight: 1.4
                  }}
                >
                  {page.description}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Bottom flourish */}
        <svg
          width='70'
          height='26'
          viewBox='0 0 70 26'
          xmlns='http://www.w3.org/2000/svg'
          style={{ opacity: 0.32 }}
        >
          <path
            d='M 35,2 C 26,9 9,10 4,17 C 9,19 18,15 35,24 C 52,15 61,19 66,17 C 61,10 44,9 35,2 Z'
            stroke={inkColor}
            strokeWidth='0.9'
            fill='none'
          />
        </svg>
      </div>
    </main>
  )
}
