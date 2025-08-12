'use client'

import React, { useEffect, useRef, useState } from 'react'

type Props = {
  src: string
  size?: number // diâmetro px do player
  stroke?: number // espessura do anel
  progressColorClass?: string // cor do progresso (stroke + opcional text)
  highlightColorClass?: string // cor do progresso no highlight
  trackColorClass?: string // cor do trilho
  highlightStart?: number // início do highlight (s)
  highlightEnd?: number // fim do highlight (s)
  numberSize?: string // classe Tailwind p/ tamanho do número (ex: "text-2xl")
  numberColorClass?: string // cor do número normal
  highlightNumberColorClass?: string // cor do número no highlight
}

export default function AudioCirclePlayer({
  src,
  size = 220,
  stroke = 10,
  progressColorClass = 'stroke-blue-500',
  highlightColorClass = 'stroke-amber-500',
  trackColorClass = 'stroke-neutral-300',
  highlightStart,
  highlightEnd,
  numberSize = 'text-2xl',
  numberColorClass = 'text-blue-600',
  highlightNumberColorClass = 'text-amber-600'
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)

  const [isReady, setIsReady] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)

  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r

  const progress = duration > 0 ? Math.min(current / duration, 1) : 0
  const dashOffset = circumference * (1 - progress)

  const inHighlight =
    isFinite(highlightStart as number) &&
    isFinite(highlightEnd as number) &&
    current >= Math.min(highlightStart!, highlightEnd!) &&
    current <= Math.max(highlightStart!, highlightEnd!)

  const ringColorClass = inHighlight
    ? highlightColorClass
    : progressColorClass
  const numberColor = inHighlight
    ? highlightNumberColorClass
    : numberColorClass

  // === Áudio ===
  useEffect(() => {
    const audio = new Audio(src)
    audioRef.current = audio

    const onLoaded = () => {
      setDuration(Math.floor(audio.duration || 0))
      setIsReady(true)
    }
    const onTime = () =>
      setCurrent(Math.floor(audio.currentTime || 0))
    // const onEnd = () => setIsPlaying(false)
    const onEnd = () => {
      setIsPlaying(false)

      if (current > 0) {
        setCurrent(0)
      }
    }

    audio.addEventListener('loadedmetadata', onLoaded)
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('ended', onEnd)

    const loop = () => {
      if (!audio.paused)
        setCurrent(Math.floor(audio.currentTime || 0))
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      audio.pause()
      audio.removeEventListener('loadedmetadata', onLoaded)
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('ended', onEnd)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [src])

  const toggle = async () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      try {
        await a.play()
        setIsPlaying(true)
      } catch {}
    } else {
      a.pause()
      setIsPlaying(false)
    }
  }

  const seekTo = (t: number) => {
    const a = audioRef.current
    if (!a || !isReady) return
    const clamped = Math.max(0, Math.min(t, duration))
    a.currentTime = clamped
    setCurrent(Math.floor(clamped))
  }

  // === Clique na borda para seek ===
  const onPathPointerDown: React.PointerEventHandler<
    SVGSVGElement
  > = e => {
    if (!svgRef.current || !isReady || duration <= 0) return

    const rect = svgRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2

    const x = e.clientX - cx
    const y = e.clientY - cy

    const dist = Math.hypot(x, y)
    const hitWidth = Math.max(stroke, 24)
    const inner = r - hitWidth / 2
    const outer = r + hitWidth / 2

    if (dist >= inner && dist <= outer) {
      const angle = Math.atan2(y, x)
      let deg = (angle * 180) / Math.PI
      deg = (deg + 450) % 360
      const fraction = deg / 360
      seekTo(fraction * duration)
      e.stopPropagation()
    }
  }

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <div
      className='group relative inline-flex items-center justify-center select-none'
      style={{ width: size, height: size }}
    >
      {/* Trilho e progresso */}
      <svg
        ref={svgRef}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className='absolute inset-0'
        role='img'
        aria-label='Player de áudio circular'
        onPointerDown={onPathPointerDown}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          className={`${trackColorClass} fill-none`}
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          className={`${ringColorClass} fill-none transition-[stroke] duration-200 cursor-pointer`}
          strokeWidth={stroke}
          strokeLinecap='round'
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: dashOffset,
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%'
          }}
        />
      </svg>

      {/* Número central */}
      <div
        className={`pointer-events-none z-10 font-medium tabular-nums ${numberSize} ${numberColor}`}
      >
        {isReady ? current : '—'}
      </div>

      {/* Botão play/pause central pequeno */}
      <button
        type='button'
        onClick={toggle}
        onKeyDown={onKey}
        aria-label={isPlaying ? 'Pausar' : 'Tocar'}
        className='
          pointer-events-none group-hover:pointer-events-auto focus-visible:pointer-events-auto
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity
        '
      >
        <span className='grid place-items-center w-14 h-14 rounded-full bg-black/50 backdrop-blur'>
          {isPlaying ? (
            <svg
              viewBox='0 0 24 24'
              width='28'
              height='28'
              className='fill-white'
              aria-hidden='true'
            >
              <rect x='6' y='4' width='4' height='16' />
              <rect x='14' y='4' width='4' height='16' />
            </svg>
          ) : (
            <svg
              viewBox='0 0 24 24'
              width='28'
              height='28'
              className='fill-white'
              aria-hidden='true'
            >
              <path d='M8 5v14l11-7z' />
            </svg>
          )}
        </span>
      </button>
    </div>
  )
}
