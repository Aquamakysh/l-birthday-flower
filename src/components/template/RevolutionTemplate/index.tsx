'use client'

import { useState } from 'react'

import { BackButton } from '@components/ui/BackButton'

import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})
const hand = dancingScript.style.fontFamily

const gold = '#e8c870'
const softWhite = 'rgba(240,225,200,0.90)'
const dimGold = 'rgba(232,200,112,0.60)'

const roman = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
  'XI',
  'XII',
  'XIII'
]

const poemImages = [
  '/assets/revolution/01.jpeg',
  '/assets/revolution/02.jpeg',
  '/assets/revolution/03.jpeg',
  '/assets/revolution/04.jpeg',
  '/assets/revolution/05.jpeg',
  '/assets/revolution/06.jpeg',
  '/assets/revolution/07.jpeg',
  '/assets/revolution/08.jpeg',
  '/assets/revolution/09.jpeg',
  '/assets/revolution/10.jpeg',
  '/assets/revolution/11.jpeg',
  '/assets/revolution/12.jpeg',
  '/assets/revolution/13.jpeg'
]

const cardTransforms = [
  { rotate: -5.8, x: 28 },
  { rotate: 7.2, x: -38 },
  { rotate: -2.1, x: 42 },
  { rotate: 9.4, x: -22 },
  { rotate: -7.6, x: 16 },
  { rotate: 4.3, x: -46 },
  { rotate: -10.1, x: 34 },
  { rotate: 6.5, x: -18 },
  { rotate: -3.4, x: 44 },
  { rotate: 8.8, x: -32 },
  { rotate: -1.2, x: 20 },
  { rotate: 5.7, x: -40 },
  { rotate: -8.3, x: 26 }
]

const stars = [
  [8, 12, 1.2],
  [15, 8, 0.8],
  [22, 18, 1.5],
  [35, 5, 1.0],
  [48, 14, 0.7],
  [62, 8, 1.3],
  [75, 12, 0.9],
  [88, 6, 1.1],
  [92, 20, 0.6],
  [5, 28, 0.8],
  [18, 35, 1.4],
  [30, 25, 0.7],
  [42, 32, 1.1],
  [58, 28, 0.9],
  [70, 22, 1.2],
  [82, 30, 0.8],
  [96, 28, 1.0],
  [10, 48, 0.6],
  [25, 55, 1.3],
  [38, 44, 0.9],
  [52, 50, 0.7],
  [65, 42, 1.1],
  [78, 52, 0.8],
  [92, 46, 1.4],
  [8, 65, 0.7],
  [20, 72, 1.0],
  [32, 60, 0.9],
  [45, 68, 1.2],
  [60, 62, 0.8],
  [72, 70, 1.1],
  [85, 64, 0.7],
  [98, 72, 1.3],
  [12, 82, 1.0],
  [25, 88, 0.8],
  [38, 78, 1.2],
  [50, 84, 0.7],
  [62, 80, 1.0],
  [75, 85, 0.9],
  [88, 78, 1.3],
  [96, 85, 0.8],
  [20, 40, 2.0],
  [55, 25, 2.2],
  [80, 45, 1.8],
  [40, 70, 2.1],
  [70, 80, 1.9]
]

function EnvelopeCard({
  image,
  index,
  isOpen,
  onToggle
}: {
  image: string
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const grainLeftId = `grain-l-${index}`
  const grainRightId = `grain-r-${index}`

  return (
    <button
      type='button'
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={`Estrofe ${roman[index]}`}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'block',
        userSelect: 'none',
        textAlign: 'left',
        width: '100%'
      }}
    >
      <div
        style={{
          position: 'relative',
          borderRadius: '6px',
          border: '1px solid rgba(130,80,18,0.45)',
          boxShadow: '0 6px 24px rgba(60,30,5,0.45)',
          overflow: 'visible',
          minHeight: '163px'
        }}
      >
        {/* Photo — always present in center, revealed when flaps open */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={`Foto ${roman[index]}`}
          style={{
            width: '100%',
            display: 'block',
            borderRadius: '5px'
          }}
        />

        {/* TOP FLAP — hinged on top edge, folds upward on open */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '50%',
            overflow: 'hidden',
            borderRadius: '5px 5px 0 0',
            transformOrigin: 'top center',
            transform: isOpen
              ? 'perspective(700px) rotateX(180deg)'
              : 'rotateX(0deg)',
            transition:
              'transform 0.52s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 2
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at 40% 30%, #f7edd0 0%, #e8d09a 55%, #cfb06a 100%)'
            }}
          />
          <svg
            aria-hidden='true'
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              mixBlendMode: 'multiply',
              opacity: 0.38
            }}
          >
            <filter id={grainLeftId}>
              <feTurbulence
                type='fractalNoise'
                baseFrequency='0.72'
                numOctaves='4'
                stitchTiles='stitch'
              />
              <feColorMatrix type='saturate' values='0' />
            </filter>
            <rect
              width='100%'
              height='100%'
              filter={`url(#${grainLeftId})`}
            />
          </svg>
        </div>

        {/* BOTTOM FLAP — hinged on bottom edge, folds downward on open */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            overflow: 'hidden',
            borderRadius: '0 0 5px 5px',
            transformOrigin: 'bottom center',
            transform: isOpen
              ? 'perspective(700px) rotateX(-180deg)'
              : 'rotateX(0deg)',
            transition:
              'transform 0.52s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 2
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at 60% 70%, #f7edd0 0%, #e8d09a 55%, #cfb06a 100%)'
            }}
          />
          <svg
            aria-hidden='true'
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              mixBlendMode: 'multiply',
              opacity: 0.38
            }}
          >
            <filter id={grainRightId}>
              <feTurbulence
                type='fractalNoise'
                baseFrequency='0.72'
                numOctaves='4'
                stitchTiles='stitch'
              />
              <feColorMatrix type='saturate' values='0' />
            </filter>
            <rect
              width='100%'
              height='100%'
              filter={`url(#${grainRightId})`}
            />
          </svg>
        </div>

        {/* HORIZONTAL CREASE + NUMERAL — fades out as flaps open */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            pointerEvents: 'none',
            opacity: isOpen ? 0 : 1,
            transition: isOpen
              ? 'opacity 0.15s ease'
              : 'opacity 0.3s ease 0.35s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '50%',
              height: '1px',
              background: 'rgba(100,55,10,0.45)',
              boxShadow: '0 1px 4px rgba(70,35,5,0.2)'
            }}
          />
          <span
            style={{
              color: 'rgba(120,65,15,0.6)',
              fontSize: '0.8rem'
            }}
          >
            ✦
          </span>
          <span
            style={{
              fontFamily: hand,
              color: 'rgba(90,45,10,0.78)',
              fontSize: '1.3rem',
              fontWeight: 600,
              letterSpacing: '0.12em'
            }}
          >
            {roman[index]}
          </span>
          <span
            style={{
              color: 'rgba(120,65,15,0.6)',
              fontSize: '0.8rem'
            }}
          >
            ✦
          </span>
        </div>
      </div>
    </button>
  )
}

export function RevolutionTemplate() {
  const [openCards, setOpenCards] = useState<Set<number>>(new Set())
  const [lastClicked, setLastClicked] = useState<number | null>(null)

  function toggleCard(index: number) {
    setLastClicked(index)
    setOpenCards(prev => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <main
      className='relative min-h-dvh w-dvw flex flex-col items-center justify-start overflow-x-hidden'
      style={{
        background:
          'radial-gradient(ellipse at 40% 30%, #1a0a30 0%, #080e1e 55%, #030810 100%)'
      }}
    >
      <BackButton />

      {/* Star field */}
      <svg
        aria-hidden='true'
        className='pointer-events-none fixed inset-0'
        width='100%'
        height='100%'
        xmlns='http://www.w3.org/2000/svg'
        style={{ zIndex: 0 }}
      >
        {stars.map(([cx, cy, r], i) => (
          <circle
            key={i}
            cx={`${cx}%`}
            cy={`${cy}%`}
            r={r}
            fill='white'
            fillOpacity={0.45 + (i % 6) * 0.08}
          />
        ))}
      </svg>

      {/* Soft glow behind content */}
      <div
        aria-hidden='true'
        className='pointer-events-none fixed'
        style={{
          inset: 0,
          zIndex: 1,
          background:
            'radial-gradient(ellipse 75% 55% at 50% 50%, rgba(55,15,85,0.55) 0%, transparent 70%)'
        }}
      />

      {/* Content */}
      <div
        className='relative flex flex-col items-center gap-6 px-8 py-20 text-center'
        style={{ zIndex: 2 }}
      >
        <p
          style={{
            fontFamily: hand,
            color: dimGold,
            fontSize: '1rem',
            letterSpacing: '0.28em',
            fontWeight: 400
          }}
        >
          ✦ 10 anos ✦
        </p>

        <h1
          style={{
            fontFamily: hand,
            color: gold,
            fontSize: 'clamp(3.6rem, 13vw, 7rem)',
            fontWeight: 700,
            lineHeight: 1.0,
            textShadow:
              '0 0 60px rgba(232,180,60,0.55), 0 0 130px rgba(200,140,30,0.22)'
          }}
        >
          Revolução
        </h1>

        <svg
          width='200'
          height='14'
          viewBox='0 0 200 14'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M 4,7 C 40,2 80,11 100,7 C 120,3 160,11 196,7'
            stroke={gold}
            strokeWidth='1.2'
            strokeLinecap='round'
            fill='none'
            opacity='0.45'
          />
          <circle
            cx={100}
            cy={7}
            r={2}
            fill={gold}
            fillOpacity={0.6}
          />
        </svg>

        <p
          style={{
            fontFamily: hand,
            color: softWhite,
            fontSize: 'clamp(1.15rem, 4.5vw, 1.7rem)',
            fontWeight: 400,
            lineHeight: 1.55,
            maxWidth: '520px'
          }}
        >
          Há 10 anos te conheci...
        </p>

        <div
          className='flex flex-col items-stretch gap-20 md:gap-[90px] w-[calc(67%+2.7rem)] md:w-full md:max-w-[340px]'
          style={{ marginTop: '1rem' }}
        >
          {poemImages.map((image, si) => {
            const t = cardTransforms[si]
            return (
              <div
                key={si}
                style={{
                  overflow: 'visible',
                  transform: `rotate(${t.rotate}deg) translateX(${t.x}px)`,
                  transformOrigin: 'center center',
                  width: '100%',
                  zIndex:
                    lastClicked === si
                      ? 20
                      : openCards.has(si)
                        ? 8
                        : 1
                }}
              >
                <EnvelopeCard
                  image={image}
                  index={si}
                  isOpen={openCards.has(si)}
                  onToggle={() => toggleCard(si)}
                />
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
