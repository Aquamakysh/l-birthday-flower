'use client'

import { useState } from 'react'

import { BackNav } from './BackNav'
import {
  font,
  inkColor,
  pageBackground,
  phrases,
  softAccent
} from './data'
import { Grain } from './Grain'
import { WaveDivider } from './WaveDivider'

export function RandomScreen({
  onBack,
  revealedCount
}: {
  onBack: () => void
  revealedCount: number
}) {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * revealedCount)
  )
  const [opacity, setOpacity] = useState(1)

  function shuffle() {
    setOpacity(0)
    setTimeout(() => {
      setIndex(Math.floor(Math.random() * revealedCount))
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setOpacity(1))
      })
    }, 200)
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
            🎲
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
            Pílula sortida
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
              color: softAccent,
              fontSize: '0.78rem',
              fontWeight: 300
            }}
          >
            Pílula #{index + 1}
          </p>
          <p
            style={{
              fontFamily: font,
              color: inkColor,
              fontSize: '1.2rem',
              fontWeight: 700,
              lineHeight: 1.5,
              opacity,
              transition: 'opacity 0.25s ease'
            }}
          >
            {phrases[index]}
          </p>
        </div>

        <button
          type='button'
          onClick={shuffle}
          className='rounded-xl px-8 py-3 transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97]'
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
          Sortear outra 🎲
        </button>
      </div>
    </main>
  )
}
