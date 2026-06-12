'use client'

import { useState } from 'react'

import {
  accent,
  font,
  inkColor,
  pageBackground,
  phrases,
  titlePhrase
} from '@components/section/pilulas/data'
import { Grain } from '@components/section/pilulas/Grain'
import { HistoryScreen } from '@components/section/pilulas/HistoryScreen'
import { NavCard } from '@components/section/pilulas/NavCard'
import { RandomScreen } from '@components/section/pilulas/RandomScreen'
import { BackButton } from '@components/ui/BackButton'

type Screen = 'main' | 'history' | 'random'

export function PilulasTemplate() {
  const [screen, setScreen] = useState<Screen>('main')

  if (screen === 'history') {
    return <HistoryScreen onBack={() => setScreen('main')} />
  }

  if (screen === 'random') {
    return (
      <RandomScreen
        onBack={() => setScreen('main')}
        revealedCount={phrases.length}
      />
    )
  }

  return (
    <main
      className='relative min-h-dvh w-dvw flex flex-col items-center justify-start overflow-x-hidden'
      style={pageBackground}
    >
      <BackButton />
      <Grain />

      <div className='relative z-10 flex flex-col items-center px-6 py-20 gap-10 w-full max-w-md'>
        {/* Header */}
        <div className='flex flex-col items-center gap-2 text-center'>
          <h1
            style={{
              fontFamily: font,
              color: inkColor,
              fontSize: '3.4rem',
              fontWeight: 700,
              lineHeight: 1.05
            }}
          >
            Pílulas
          </h1>
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
            uma pra cada dia
          </p>
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

        {/* Title phrase */}
        <div
          className='flex flex-col items-center gap-3 rounded-2xl px-6 py-6 w-full text-center'
          style={{
            background:
              'linear-gradient(135deg, rgba(255,248,238,0.95) 0%, rgba(255,243,225,0.88) 100%)',
            border: '1px solid rgba(170,110,55,0.28)',
            boxShadow:
              '0 4px 24px rgba(110,60,15,0.10), inset 0 1px 0 rgba(255,255,255,0.8)'
          }}
        >
          <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>
            ❤️
          </span>
          <p
            style={{
              fontFamily: font,
              color: inkColor,
              fontSize: '1.1rem',
              fontWeight: 700,
              lineHeight: 1.6
            }}
          >
            {titlePhrase}
          </p>
        </div>

        {/* Nav cards */}
        <div className='flex flex-col gap-4 w-full'>
          <NavCard
            emoji='💊'
            title='Pílulas'
            subtitle={`${phrases.length} pílulas`}
            onClick={() => setScreen('history')}
          />

          <NavCard
            emoji='🎲'
            title='Sortear pílula'
            subtitle='Uma pílula aleatória ♡'
            onClick={() => setScreen('random')}
          />
        </div>
      </div>
    </main>
  )
}
