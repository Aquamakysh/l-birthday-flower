'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { BackButton } from '@components/ui/BackButton'

const waveAudio = '/assets/chocolates/audio/joaogilberto-wave.mp3'

const verses = [
  'Em ti vejo tanta riqueza',
  'Mas além de admirar',
  'Quero muito te mimar',
  'Como uma princesa',
  'E para esta alteza',
  'Lindas lembranças dar'
]

const RECT = 'M 5,5 H 115 V 73 H 5 Z'

const biteShapes = [
  // 1 — top-right: arco largo de dentes arredondados
  'M 76,5 C 72,10 66,14 68,22 C 74,24 82,20 84,28 C 90,26 98,30 100,22 C 108,26 114,20 115,14 L 115,5 Z',
  // 2 — top-left: mordida arredondada pequena
  'M 5,5 L 5,22 C 10,18 14,24 18,20 C 22,26 28,22 30,14 C 26,10 18,8 5,5 Z',
  // 3 — bottom-right: mordida horizontal arredondada
  'M 86,73 C 82,64 76,60 78,50 C 86,54 96,50 100,58 C 108,54 114,60 115,54 L 115,73 Z',
  // 4 — bottom-left: mordida funda com curvas
  'M 5,73 L 5,46 C 12,50 14,42 22,46 C 26,38 34,42 36,52 C 40,56 34,64 26,62 C 24,66 18,70 5,73 Z',
  // 5 — right side: pedaço arredondado no meio
  'M 115,20 C 106,18 98,24 96,34 C 102,38 110,34 115,40 Z',
  // 6 — top-center: semicírculo suave
  'M 44,5 C 42,12 40,18 46,24 C 52,20 58,24 62,18 C 66,12 64,6 56,5 Z'
]

const crumbSets = [
  [
    { x: 96, y: 28 },
    { x: 104, y: 22 },
    { x: 86, y: 34 },
    { x: 110, y: 18 },
    { x: 100, y: 36 }
  ],
  [
    { x: 20, y: 26 },
    { x: 28, y: 18 },
    { x: 12, y: 30 },
    { x: 24, y: 36 },
    { x: 16, y: 20 }
  ],
  [
    { x: 90, y: 56 },
    { x: 102, y: 52 },
    { x: 80, y: 60 },
    { x: 108, y: 58 },
    { x: 94, y: 48 }
  ],
  [
    { x: 28, y: 58 },
    { x: 18, y: 50 },
    { x: 36, y: 46 },
    { x: 12, y: 62 },
    { x: 24, y: 68 }
  ],
  [
    { x: 100, y: 30 },
    { x: 108, y: 38 },
    { x: 94, y: 42 },
    { x: 106, y: 24 },
    { x: 112, y: 44 }
  ],
  [
    { x: 50, y: 26 },
    { x: 60, y: 20 },
    { x: 44, y: 20 },
    { x: 56, y: 30 },
    { x: 48, y: 14 }
  ]
]

function shuffle(arr: number[]) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Chocolate piece ────────────────────────────────────────────────────────

interface ChocolateProps {
  id: number
  bitten: boolean
  hinted: boolean
  disabled: boolean
  onClick: () => void
}

function Chocolate({
  id,
  bitten,
  hinted,
  disabled,
  onClick
}: ChocolateProps) {
  const clipId = `choc-clip-${id}`
  const shadowId = `shadow-${id}`
  const shapePath = bitten ? `${RECT} ${biteShapes[id]}` : RECT

  return (
    <button
      onClick={!bitten && !disabled ? onClick : undefined}
      className={`focus:outline-none ${
        bitten || disabled
          ? 'cursor-default'
          : 'hover:scale-105 hover:rotate-1 cursor-pointer transition-transform duration-200 ease-out'
      }`}
      style={{
        animation: hinted
          ? 'choc-wobble 0.55s ease-in-out'
          : undefined,
        transformOrigin: 'center bottom'
      }}
      aria-label={bitten ? 'Chocolate mordido' : 'Morder o chocolate'}
    >
      <svg
        width='130'
        height='86'
        viewBox='0 0 120 78'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <clipPath id={clipId}>
            <path fillRule='evenodd' d={shapePath} />
          </clipPath>
          <filter
            id={shadowId}
            x='-8%'
            y='-8%'
            width='116%'
            height='116%'
          >
            <feDropShadow
              dx='2'
              dy='3'
              stdDeviation='2'
              floodColor='#1a0a00'
              floodOpacity='0.55'
            />
          </filter>
        </defs>

        <path
          fillRule='evenodd'
          d={shapePath}
          fill='#6B3A2A'
          filter={`url(#${shadowId})`}
        />

        <g clipPath={`url(#${clipId})`}>
          <path fillRule='evenodd' d={shapePath} fill='#7A4535' />

          <line
            x1='42'
            y1='5'
            x2='42'
            y2='73'
            stroke='#3D1F14'
            strokeWidth='2'
          />
          <line
            x1='78'
            y1='5'
            x2='78'
            y2='73'
            stroke='#3D1F14'
            strokeWidth='2'
          />
          <line
            x1='5'
            y1='39'
            x2='115'
            y2='39'
            stroke='#3D1F14'
            strokeWidth='2'
          />

          <rect x='6' y='6' width='34' height='31' fill='#7D4A38' />
          <rect x='44' y='6' width='32' height='31' fill='#7A4635' />
          <rect x='80' y='6' width='33' height='31' fill='#7D4A38' />
          <rect x='6' y='41' width='34' height='30' fill='#7A4635' />
          <rect x='44' y='41' width='32' height='30' fill='#7D4A38' />
          <rect x='80' y='41' width='33' height='30' fill='#7A4635' />

          <rect
            x='10'
            y='9'
            width='20'
            height='8'
            rx='3'
            fill='rgba(255,255,255,0.11)'
          />
        </g>

        {bitten && (
          <path d={biteShapes[id]} fill='#1E0805' opacity='0.9' />
        )}

        {bitten &&
          crumbSets[id].map((c, i) => (
            <circle
              key={i}
              cx={c.x}
              cy={c.y}
              r={1.5 + (i % 3) * 0.6}
              fill='#8B5240'
              opacity='0.75'
            />
          ))}
      </svg>
    </button>
  )
}

// ─── Vinyl Player ────────────────────────────────────────────────────────────

// 33 RPM → degrees per frame at 60 fps
const RPM_SPEED = (33 * 360) / 60 / 60 // ≈ 3.3 deg/frame
const DECEL = 0.982 // multiplier per frame when decelerating

function VinylPlayer({ visible }: { visible: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const discRef = useRef<SVGGElement | null>(null)
  const isPlayingRef = useRef(false)
  const angleRef = useRef(0)
  const speedRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  // Animation loop — runs entirely via refs, no state updates per frame
  const animate = useCallback(() => {
    if (isPlayingRef.current) {
      speedRef.current = RPM_SPEED
    } else {
      speedRef.current *= DECEL
      if (speedRef.current < 0.05) {
        speedRef.current = 0
        rafRef.current = null
        return
      }
    }
    angleRef.current = (angleRef.current + speedRef.current) % 360
    if (discRef.current) {
      discRef.current.style.transform = `rotate(${angleRef.current}deg)`
    }
    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    audioRef.current = new Audio(waveAudio)
    const audio = audioRef.current

    function handleEnded() {
      isPlayingRef.current = false
      setIsPlaying(false)
      // RAF loop will decelerate and stop on its own
    }

    audio.addEventListener('ended', handleEnded)
    return () => {
      audio.removeEventListener('ended', handleEnded)
      audio.pause()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (isPlayingRef.current) {
      audio.pause()
      isPlayingRef.current = false
      setIsPlaying(false)
      // loop keeps running — deceleration happens inside animate()
    } else {
      audio.play()
      isPlayingRef.current = true
      setIsPlaying(true)
      // start loop only if not already running
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }
  }

  return (
    <div
      className={`flex flex-col items-center gap-5 transition-all duration-700 ease-out ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* Turntable */}
      <svg
        width='290'
        height='252'
        viewBox='0 0 272 236'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient
            id='plinth-grad'
            x1='0'
            y1='0'
            x2='0'
            y2='1'
          >
            <stop offset='0%' stopColor='#353535' />
            <stop offset='100%' stopColor='#1e1e1e' />
          </linearGradient>
          <linearGradient id='btn-grad' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#484848' />
            <stop offset='100%' stopColor='#2e2e2e' />
          </linearGradient>
        </defs>

        {/* Plinth base */}
        <rect
          x='4'
          y='4'
          width='264'
          height='228'
          rx='12'
          fill='url(#plinth-grad)'
        />
        {/* Plinth highlight edge (top) */}
        <rect
          x='4'
          y='4'
          width='264'
          height='228'
          rx='12'
          fill='none'
          stroke='#444'
          strokeWidth='1'
        />
        <rect
          x='5'
          y='5'
          width='262'
          height='4'
          rx='4'
          fill='rgba(255,255,255,0.04)'
        />

        {/* Platter well (recessed) */}
        <circle cx='132' cy='112' r='96' fill='#181818' />
        <circle
          cx='132'
          cy='112'
          r='96'
          fill='none'
          stroke='#111'
          strokeWidth='2'
        />

        {/* Spinning disc — rotated via RAF through discRef */}
        <g
          ref={discRef}
          style={{
            transformBox: 'fill-box',
            transformOrigin: 'center'
          }}
        >
          <circle cx='132' cy='112' r='92' fill='#0d0d0d' />

          {Array.from({ length: 14 }, (_, i) => (
            <circle
              key={i}
              cx='132'
              cy='112'
              r={86 - i * 4.5}
              fill='none'
              stroke='#1c1c1c'
              strokeWidth='0.8'
            />
          ))}

          <circle cx='132' cy='112' r='30' fill='#4A1A0E' />
          <circle cx='132' cy='112' r='28' fill='#5C2318' />

          <text
            x='132'
            y='107'
            textAnchor='middle'
            fill='#D4A070'
            fontSize='7'
            fontFamily='Georgia, serif'
            letterSpacing='1'
          >
            WAVE
          </text>
          <text
            x='132'
            y='117'
            textAnchor='middle'
            fill='#A07040'
            fontSize='5'
            fontFamily='Georgia, serif'
          >
            João Gilberto
          </text>
          <text
            x='132'
            y='125'
            textAnchor='middle'
            fill='#6B4828'
            fontSize='4.5'
            fontFamily='Georgia, serif'
          >
            ODEON · 1967
          </text>

          <circle cx='132' cy='112' r='3.5' fill='#222' />
        </g>

        {/* Tonearm */}
        <g
          style={{
            transformOrigin: '238px 24px',
            transform: isPlaying ? 'rotate(0deg)' : 'rotate(-28deg)',
            transition: 'transform 1.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <rect
            x='240'
            y='8'
            width='10'
            height='18'
            rx='3'
            fill='#3a3a3a'
          />
          <circle cx='238' cy='24' r='11' fill='#2e2e2e' />
          <circle cx='238' cy='24' r='6' fill='#484848' />
          <circle cx='238' cy='24' r='2.5' fill='#666' />
          <line
            x1='238'
            y1='24'
            x2='194'
            y2='100'
            stroke='#7a7a7a'
            strokeWidth='5'
            strokeLinecap='round'
          />
          <line
            x1='194'
            y1='100'
            x2='180'
            y2='116'
            stroke='#8a8a8a'
            strokeWidth='4'
            strokeLinecap='round'
          />
          <rect
            x='173'
            y='113'
            width='12'
            height='6'
            rx='1.5'
            fill='#aaa'
          />
          <line
            x1='179'
            y1='119'
            x2='179'
            y2='125'
            stroke='#ccc'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <circle cx='179' cy='126' r='2' fill='#ddd' />
        </g>

        {/* Play / Pause — bottom-left, equal margin (10px) from left and bottom */}
        <g
          onClick={togglePlay}
          style={{ cursor: 'pointer' }}
          role='button'
          aria-label={isPlaying ? 'Pausar' : 'Tocar'}
        >
          <rect
            x='14'
            y='200'
            width='68'
            height='22'
            rx='6'
            fill='url(#btn-grad)'
            stroke='#555'
            strokeWidth='0.8'
          />
          {isPlaying ? (
            <>
              <rect
                x='41'
                y='205'
                width='5'
                height='12'
                rx='1.5'
                fill='#D4A070'
              />
              <rect
                x='50'
                y='205'
                width='5'
                height='12'
                rx='1.5'
                fill='#D4A070'
              />
            </>
          ) : (
            <path d='M 42,205 L 54,211 L 42,217 Z' fill='#D4A070' />
          )}
        </g>
      </svg>

      {/* Music info */}
      <div className='text-center flex flex-col gap-1'>
        <p className='text-[#D4A070] font-medium tracking-wide'>
          Wave - João Gilberto
        </p>
        <p className='text-[#9A7050] text-sm italic'>
          &ldquo;[...] São coisas lindas que eu tenho pra te dar
          [...]&rdquo;
        </p>
      </div>
    </div>
  )
}

// ─── Template ────────────────────────────────────────────────────────────────

export function ChocolatesTemplate() {
  const [sequence] = useState(() => shuffle([0, 1, 2, 3, 4, 5]))
  const [step, setStep] = useState(0)
  const [bitten, setBitten] = useState<boolean[]>(
    Array(6).fill(false)
  )
  const [hintPos, setHintPos] = useState<number | null>(null)

  const isHinting = hintPos !== null
  const completed = step === 6

  const playHint = useCallback(() => {
    setHintPos(0)
  }, [])

  useEffect(() => {
    if (hintPos === null) return
    if (hintPos >= sequence.length) {
      setHintPos(null)
      return
    }
    const timer = setTimeout(() => {
      setHintPos(p => (p !== null ? p + 1 : null))
    }, 700)
    return () => clearTimeout(timer)
  }, [hintPos, sequence.length])

  useEffect(() => {
    playHint()
  }, [playHint])

  const highlightedId =
    hintPos !== null && hintPos < sequence.length
      ? sequence[hintPos]
      : null

  function handleClick(id: number) {
    const expected = sequence[step]
    if (id === expected) {
      const next = [...bitten]
      next[id] = true
      setBitten(next)
      setStep(s => s + 1)
    } else {
      setBitten(Array(6).fill(false))
      setStep(0)
      playHint()
    }
  }

  return (
    <main className='min-h-dvh w-dvw bg-[#1C0A04] flex flex-col items-center justify-center gap-10 p-6'>
      <BackButton />
      <h1 className='text-[#D4A070] text-2xl md:text-3xl font-light tracking-widest text-center uppercase'>
        Ondas de Chocolates
      </h1>

      <section
        aria-label='Caixa de chocolates'
        className='grid grid-cols-3 gap-4 bg-[#2E1108] p-6 rounded-2xl shadow-2xl border border-[#4A1E0A]'
      >
        {Array.from({ length: 6 }, (_, i) => (
          <Chocolate
            key={i}
            id={i}
            bitten={bitten[i]}
            hinted={highlightedId === i}
            disabled={isHinting}
            onClick={() => handleClick(i)}
          />
        ))}
      </section>

      <article
        aria-label='Poema'
        className='text-center flex flex-col gap-1'
      >
        {verses.map((verse, i) => (
          <p
            key={i}
            className={`text-[#D4A070] font-light tracking-wide text-base md:text-lg transition-all duration-700 ease-in-out ${
              bitten[sequence[i]]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2 pointer-events-none select-none'
            }`}
            style={{
              fontStyle: i === 0 || i === 5 ? 'italic' : 'normal'
            }}
          >
            {verse}
          </p>
        ))}
      </article>

      <VinylPlayer visible={completed} />
    </main>
  )
}
