import { accent, font } from './data'

export function BackNav({ onBack }: { onBack: () => void }) {
  return (
    <button
      type='button'
      onClick={onBack}
      className='self-start flex items-center gap-1.5 transition-opacity duration-150 hover:opacity-60'
      style={{
        fontFamily: font,
        color: accent,
        fontSize: '0.9rem',
        fontWeight: 300,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0
      }}
    >
      ← Voltar
    </button>
  )
}
