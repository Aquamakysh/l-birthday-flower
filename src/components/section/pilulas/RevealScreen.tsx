'use client'

import { useState } from 'react'

import { BackNav } from './BackNav'
import {
  accent,
  font,
  formatDate,
  inkColor,
  pageBackground,
  phraseDate,
  phrases,
  softAccent
} from './data'
import { Grain } from './Grain'
import { WaveDivider } from './WaveDivider'

export function RevealScreen({
  dayIndex,
  onBack
}: {
  dayIndex: number
  onBack: () => void
}) {
  const [revealed, setRevealed] = useState(false)
  const [opacity, setOpacity] = useState(0)

  function handleReveal() {
    setRevealed(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setOpacity(1))
    })
  }

  return (
    <main
      className='relative min-h-dvh w-dvw flex flex-col items-center justify-start overflow-x-hidden'
      style={pageBackground}
    >
      <Grain />

      <div className='relative z-10 flex flex-col items-center px-6 py-20 gap-8 w-full max-w-md'>
        <BackNav onBack={onBack} />

        <div className='flex flex-col items-center gap-2 text-center'>
          <span style={{ fontSize: '2.2rem', lineHeight: 1 }}>
            ✨
          </span>
          <h1
            style={{
              fontFamily: font,
              color: inkColor,
              fontSize: '2.4rem',
              fontWeight: 700,
              lineHeight: 1.05
            }}
          >
            Pílula de hoje
          </h1>
          <WaveDivider />
        </div>

        <div
          className='flex flex-col items-center gap-4 rounded-2xl px-6 py-7 w-full text-center'
          style={{
            background: 'rgba(255,251,245,0.90)',
            border: '1px solid rgba(170,110,55,0.22)',
            boxShadow:
              '0 4px 24px rgba(110,60,15,0.11), inset 0 1px 0 rgba(255,255,255,0.7)'
          }}
        >
          <p
            style={{
              fontFamily: font,
              color: accent,
              fontSize: '0.82rem',
              letterSpacing: '0.14em',
              opacity: 0.72,
              fontWeight: 300
            }}
          >
            {formatDate(phraseDate(dayIndex))}
          </p>
          <p
            style={{
              fontFamily: font,
              color: softAccent,
              fontSize: '0.78rem',
              fontWeight: 300
            }}
          >
            Pílula #{dayIndex + 1}
          </p>

          {!revealed ? (
            <button
              type='button'
              onClick={handleReveal}
              className='mt-2 rounded-xl px-6 py-3 transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97]'
              style={{
                fontFamily: font,
                color: '#fdf4ec',
                fontSize: '1rem',
                fontWeight: 700,
                background:
                  'linear-gradient(135deg, #a06030 0%, #7a4020 100%)',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(110,60,15,0.22)'
              }}
            >
              Revelar ✨
            </button>
          ) : (
            <p
              style={{
                fontFamily: font,
                color: inkColor,
                fontSize: '1.2rem',
                fontWeight: 700,
                lineHeight: 1.5,
                opacity,
                transition: 'opacity 0.6s ease',
                marginTop: '0.25rem'
              }}
            >
              {phrases[dayIndex]}
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
