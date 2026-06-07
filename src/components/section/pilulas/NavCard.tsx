import { accent, font, inkColor } from './data'

export function NavCard({
  emoji,
  title,
  subtitle,
  onClick
}: {
  emoji: string
  title: string
  subtitle: string
  onClick: () => void
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='flex flex-col items-center gap-2 rounded-2xl px-6 py-5 w-full transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97]'
      style={{
        fontFamily: font,
        background: 'rgba(255,251,245,0.84)',
        border: '1px solid rgba(170,110,55,0.20)',
        boxShadow:
          '0 2px 18px rgba(110,60,15,0.09), inset 0 1px 0 rgba(255,255,255,0.7)',
        cursor: 'pointer',
        textAlign: 'center'
      }}
    >
      <span style={{ fontSize: '2rem', lineHeight: 1 }}>{emoji}</span>
      <span
        style={{
          fontFamily: font,
          color: inkColor,
          fontSize: '1.1rem',
          fontWeight: 700
        }}
      >
        {title}
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
        {subtitle}
      </span>
    </button>
  )
}
