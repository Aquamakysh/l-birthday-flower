import { BackButton } from '@components/ui/BackButton'

import type { Metadata } from 'next'
import { Kalam } from 'next/font/google'

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})
const font = kalam.style.fontFamily

const inkColor = '#3a1a08'
const accent = '#8a5530'

export const metadata: Metadata = {
  title: 'Jogos',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎮</text></svg>"
  }
}

export default function Jogos() {
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
      <BackButton />

      <div className='flex flex-col items-center gap-8 px-8 py-16 text-center max-w-sm w-full'>
        <div className='flex flex-col items-center gap-2'>
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
            Pra se divertir,
          </p>
          <h1
            style={{
              fontFamily: font,
              color: inkColor,
              fontSize: '3.2rem',
              fontWeight: 700,
              lineHeight: 1.05
            }}
          >
            Jogos
          </h1>
          <svg
            width='160'
            height='12'
            viewBox='0 0 160 12'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M 4,9 C 30,3 65,10 80,7 C 95,4 125,9 156,6'
              stroke={accent}
              strokeWidth='1.5'
              strokeLinecap='round'
              fill='none'
              opacity='0.55'
            />
          </svg>
        </div>

        <a
          href='/assets/games/palavras-cruzadas-ou-uma-frase-misteriosa.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center gap-2 rounded-2xl px-6 py-5 w-full transition-transform duration-300 hover:scale-[1.04] active:scale-[0.97]'
          style={{
            background: 'rgba(255,251,245,0.84)',
            border: '1px solid rgba(170,110,55,0.20)',
            boxShadow:
              '0 2px 18px rgba(110,60,15,0.09), inset 0 1px 0 rgba(255,255,255,0.7)',
            backdropFilter: 'blur(4px)',
            textDecoration: 'none'
          }}
        >
          <span style={{ fontSize: '2rem', lineHeight: 1 }}>📄</span>
          <span
            style={{
              fontFamily: font,
              color: inkColor,
              fontSize: '1.15rem',
              fontWeight: 700
            }}
          >
            Palavras Cruzadas
          </span>
          <span
            style={{
              fontFamily: font,
              color: accent,
              fontSize: '0.82rem',
              opacity: 0.78,
              fontWeight: 300
            }}
          >
            ou uma frase misteriosa ♡
          </span>
        </a>
      </div>
    </main>
  )
}
