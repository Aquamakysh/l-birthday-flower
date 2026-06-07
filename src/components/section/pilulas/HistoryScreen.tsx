import { BackNav } from './BackNav'
import {
  accent,
  font,
  formatDate,
  inkColor,
  pageBackground,
  phraseDate,
  phrases
} from './data'
import { Grain } from './Grain'
import { WaveDivider } from './WaveDivider'

export function HistoryScreen({
  dayIndex,
  ended,
  onBack
}: {
  dayIndex: number
  ended: boolean
  onBack: () => void
}) {
  const count = ended ? 100 : dayIndex

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
            💊
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
            {ended ? 'Pílulas' : 'Pílulas anteriores'}
          </h1>
          <WaveDivider />
        </div>

        <div className='flex flex-col gap-3 w-full'>
          {Array.from({ length: count }, (_, i) => count - 1 - i).map(
            i => (
              <div
                key={i}
                className='flex flex-col gap-1.5 rounded-xl px-5 py-4 w-full'
                style={{
                  background: 'rgba(255,251,245,0.70)',
                  border: '1px solid rgba(170,110,55,0.14)',
                  boxShadow: '0 1px 8px rgba(110,60,15,0.06)'
                }}
              >
                <span
                  style={{
                    fontFamily: font,
                    color: accent,
                    fontSize: '0.75rem',
                    fontWeight: 300,
                    opacity: 0.72
                  }}
                >
                  {formatDate(phraseDate(i), true)} · #{i + 1}
                </span>
                <p
                  style={{
                    fontFamily: font,
                    color: inkColor,
                    fontSize: '1rem',
                    fontWeight: 400,
                    lineHeight: 1.45
                  }}
                >
                  {phrases[i]}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  )
}
