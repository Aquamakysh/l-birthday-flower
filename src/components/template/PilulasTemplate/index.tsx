'use client'

import { useEffect, useState } from 'react'

import {
  accent,
  font,
  formatDate,
  inkColor,
  nextUnlockAt,
  pageBackground,
  phraseDate,
  titlePhrase
} from '@components/section/pilulas/data'
import { Grain } from '@components/section/pilulas/Grain'
import { HistoryScreen } from '@components/section/pilulas/HistoryScreen'
import { NavCard } from '@components/section/pilulas/NavCard'
import { RandomScreen } from '@components/section/pilulas/RandomScreen'
import { RevealScreen } from '@components/section/pilulas/RevealScreen'
import { BackButton } from '@components/ui/BackButton'

type Screen = 'main' | 'reveal' | 'history' | 'random'

function toHMS(ms: number): string {
  const h = Math.floor(ms / 3_600_000)
  const m = Math.floor((ms % 3_600_000) / 60_000)
  const s = Math.floor((ms % 60_000) / 1_000)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export function PilulasTemplate() {
  const [dayIndex, setDayIndex] = useState<number | null>(null)
  const [screen, setScreen] = useState<Screen>('main')
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    fetch('/api/day-index')
      .then(r => r.json())
      .then(({ dayIndex: d }) => setDayIndex(d))
  }, [])

  useEffect(() => {
    if (dayIndex === null || dayIndex >= 100) return
    const idx = dayIndex

    function tick() {
      const ms = nextUnlockAt(idx) - Date.now()
      if (ms <= 0) {
        window.location.reload()
        return
      }
      setCountdown(toHMS(ms))
    }

    tick()
    const id = setInterval(tick, 1_000)
    return () => clearInterval(id)
  }, [dayIndex])

  if (dayIndex === null) {
    return (
      <main
        className='relative min-h-dvh w-dvw flex flex-col items-center justify-center'
        style={{ backgroundColor: '#fdf4ec' }}
      />
    )
  }

  const ended = dayIndex >= 100
  const revealedCount = ended ? 100 : Math.max(0, dayIndex + 1)

  if (screen === 'reveal') {
    return (
      <RevealScreen
        dayIndex={dayIndex}
        onBack={() => setScreen('main')}
      />
    )
  }

  if (screen === 'history') {
    return (
      <HistoryScreen
        dayIndex={dayIndex}
        ended={ended}
        onBack={() => setScreen('main')}
      />
    )
  }

  if (screen === 'random') {
    return (
      <RandomScreen
        onBack={() => setScreen('main')}
        revealedCount={revealedCount}
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

        {/* Section 1: Title phrase */}
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

        {/* Section 2: Before start */}
        {dayIndex < 0 && (
          <div
            className='flex flex-col items-center gap-3 rounded-2xl px-6 py-7 w-full text-center'
            style={{
              background: 'rgba(255,251,245,0.84)',
              border: '1px solid rgba(170,110,55,0.20)',
              boxShadow:
                '0 2px 18px rgba(110,60,15,0.09), inset 0 1px 0 rgba(255,255,255,0.7)'
            }}
          >
            <span style={{ fontSize: '2.2rem', lineHeight: 1 }}>
              🌱
            </span>
            <p
              style={{
                fontFamily: font,
                color: accent,
                fontSize: '0.82rem',
                opacity: 0.78,
                fontWeight: 300,
                letterSpacing: '0.1em'
              }}
            >
              primeira pílula em
            </p>
            <p
              style={{
                fontFamily: font,
                color: inkColor,
                fontSize: '2rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                lineHeight: 1
              }}
            >
              {countdown}
            </p>
            <p
              style={{
                fontFamily: font,
                color: accent,
                fontSize: '0.9rem',
                opacity: 0.78,
                fontWeight: 300
              }}
            >
              {formatDate(phraseDate(0))} · 08:00
            </p>
          </div>
        )}

        {/* Section 2: Active — progress bar + countdown */}
        {dayIndex >= 0 && !ended && (
          <div className='w-full flex flex-col gap-3'>
            <div className='flex flex-col gap-1.5'>
              <div className='flex justify-between w-full'>
                <span
                  style={{
                    fontFamily: font,
                    color: accent,
                    fontSize: '0.78rem',
                    opacity: 0.78,
                    fontWeight: 300
                  }}
                >
                  {dayIndex + 1} de 100
                </span>
                <span
                  style={{
                    fontFamily: font,
                    color: accent,
                    fontSize: '0.78rem',
                    opacity: 0.78,
                    fontWeight: 300
                  }}
                >
                  {dayIndex + 1}%
                </span>
              </div>
              <div
                className='w-full rounded-full overflow-hidden'
                style={{
                  height: '5px',
                  background: 'rgba(138,85,48,0.12)'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${dayIndex + 1}%`,
                    background:
                      'linear-gradient(90deg, rgba(138,85,48,0.45), rgba(138,85,48,0.80))',
                    borderRadius: '9999px',
                    transition: 'width 0.6s ease'
                  }}
                />
              </div>
            </div>
            <div className='flex items-center justify-between w-full'>
              <span
                style={{
                  fontFamily: font,
                  color: accent,
                  fontSize: '0.78rem',
                  opacity: 0.65,
                  fontWeight: 300
                }}
              >
                próxima pílula em
              </span>
              <span
                style={{
                  fontFamily: font,
                  color: inkColor,
                  fontSize: '1rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em'
                }}
              >
                {countdown}
              </span>
            </div>
          </div>
        )}

        {/* Section 3: Nav cards */}
        <div className='flex flex-col gap-4 w-full'>
          {dayIndex >= 0 && !ended && (
            <NavCard
              emoji='✨'
              title='Pílula de hoje'
              subtitle={`${formatDate(phraseDate(dayIndex))} · #${dayIndex + 1}`}
              onClick={() => setScreen('reveal')}
            />
          )}

          {ended && (
            <NavCard
              emoji='🎲'
              title='Sortear pílula'
              subtitle='Uma pílula aleatória das reveladas ♡'
              onClick={() => setScreen('random')}
            />
          )}

          {dayIndex > 0 && (
            <NavCard
              emoji='💊'
              title={ended ? 'Pílulas' : 'Pílulas anteriores'}
              subtitle={`${ended ? 100 : dayIndex} pílulas reveladas`}
              onClick={() => setScreen('history')}
            />
          )}

          {dayIndex >= 9 && !ended && (
            <NavCard
              emoji='🎲'
              title='Sortear pílula'
              subtitle='Uma pílula aleatória das reveladas ♡'
              onClick={() => setScreen('random')}
            />
          )}
        </div>
      </div>
    </main>
  )
}
