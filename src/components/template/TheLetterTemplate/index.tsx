import { BackButton } from '@components/ui/BackButton'

import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})
const hand = dancingScript.style.fontFamily

const navyInk = '#1a3a6a'
const teal = '#1aafaa'
const rosePink = '#e0708a'
const roseDeep = '#b02848'
const leafGreen = '#2a9080'

const outerPetal =
  'M 0,0 C -12,-6 -14,-20 -8,-28 C -4,-34 4,-34 8,-28 C 14,-20 12,-6 0,0'
const midPetal =
  'M 0,0 C -8,-4 -9,-14 -5,-20 C -3,-24 3,-24 5,-20 C 9,-14 8,-4 0,0'
const leafShape =
  'M 0,0 C -10,-4 -14,-16 -8,-24 C 0,-28 8,-24 8,-24 C 14,-16 10,-4 0,0 Z'

function Rose({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const s = r / 34
  const outer = [0, 72, 144, 216, 288]
  const mid = [36, 108, 180, 252, 324]
  return (
    <g transform={`translate(${cx},${cy}) scale(${s})`}>
      {outer.map(a => (
        <path
          key={a}
          d={outerPetal}
          transform={`rotate(${a})`}
          fill={rosePink}
          fillOpacity={0.5}
          stroke={roseDeep}
          strokeWidth={1}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      ))}
      {mid.map(a => (
        <path
          key={a}
          d={midPetal}
          transform={`rotate(${a})`}
          fill={rosePink}
          fillOpacity={0.72}
          stroke={roseDeep}
          strokeWidth={1}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      ))}
      <circle
        cx={0}
        cy={0}
        r={7}
        fill={roseDeep}
        fillOpacity={0.85}
      />
    </g>
  )
}

function Leaf({
  cx,
  cy,
  rot,
  size = 22
}: {
  cx: number
  cy: number
  rot: number
  size?: number
}) {
  const s = size / 22
  return (
    <g
      transform={`translate(${cx},${cy}) rotate(${rot}) scale(${s})`}
    >
      <path
        d={leafShape}
        fill={leafGreen}
        fillOpacity={0.45}
        stroke={leafGreen}
        strokeWidth={1.1}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line
        x1={0}
        y1={0}
        x2={0}
        y2={-22}
        stroke={leafGreen}
        strokeWidth={0.8}
        strokeLinecap='round'
      />
    </g>
  )
}

function RoseCorner() {
  return (
    <svg
      width={145}
      height={145}
      viewBox='0 0 145 145'
      xmlns='http://www.w3.org/2000/svg'
      style={{ overflow: 'visible', display: 'block' }}
    >
      <path
        d='M 8,80 C 28,68 50,64 74,74'
        stroke={leafGreen}
        strokeWidth={1.3}
        fill='none'
        strokeLinecap='round'
      />
      <path
        d='M 56,10 C 60,35 65,54 74,74'
        stroke={leafGreen}
        strokeWidth={1.3}
        fill='none'
        strokeLinecap='round'
      />
      <path
        d='M 28,50 C 45,56 62,64 74,74'
        stroke={leafGreen}
        strokeWidth={1.0}
        fill='none'
        strokeLinecap='round'
      />
      <Leaf cx={46} cy={110} rot={-20} size={22} />
      <Leaf cx={108} cy={48} rot={68} size={20} />
      <Leaf cx={18} cy={73} rot={-15} size={17} />
      <Leaf cx={58} cy={26} rot={10} size={16} />
      <Rose cx={54} cy={16} r={16} />
      <Rose cx={26} cy={52} r={26} />
      <Rose cx={74} cy={74} r={44} />
    </svg>
  )
}

const theLetterArray = [
  [
    'A flor mais radiante da estação',
    'Que de tão linda que já era',
    'Trouxe consigo a primavera',
    'Tornando um ébrio este beija-flor',
    'Maravilhado com o seu odor',
    'Sem imaginar o que o espera'
  ],
  [
    'Cá estou eu, o beija-flor',
    'Escrevendo para ela',
    'Que é a minha primavera',
    'Porém agora ela está no outono',
    'O que me causa um transtorno',
    'Que por vê-la tão longe assim me desespera'
  ],
  [
    'Somente em meus devaneios tu sempre está',
    'Enquanto penso em ti não percebo o tempo passar',
    'É frustrante apenas poder imaginar',
    'Teus lábios macios, tu em meus braços',
    'Teu cheiro gostoso, sentir o calor dos teus abraços',
    'Só sinto novamente nas minhas lembranças, ou dormindo, quando estou a sonhar'
  ],
  [
    'Sou alguém mais racional, de lógica',
    'Não sou artista nem cantor',
    'Não sou desenhista nem compositor',
    'Mas aos meus olhos, tu, tão encantadora',
    'Sempre foi minha musa inspiradora',
    'Que transforma-me em um apaixonado sonhador'
  ],
  [
    'Quando não me reconhecer no espelho devido aos sintomas do tempo',
    'Não quero com tristeza recordar do que deixei passar',
    'Sem contigo minhas experiências compartilhar',
    'Seja por não conversarmos abertamente',
    'Ou por ser inconsequente',
    'Por isso não vou desistir de contigo estar'
  ],
  [
    'Quero me tornar o teu porto seguro',
    'Te divertir quando estiver entediada',
    'Te fazer cafuné quando estiver estressada',
    'Te ajudar quando não tiver certeza',
    'Te abraçar quando sentir tristeza',
    'Para se sentir segura e apoiada'
  ],
  [
    'Sou cético por muitas coisas',
    'Uma delas o amor à primeira vista',
    'Ele não surge logo que se conquista',
    'Se constrói na convivência',
    'Quando dos defeitos se tem ciência',
    'Dessa forma, por inteiro sendo aceita'
  ],
  [
    'Sendo assim me declaro',
    'Apaixonado desde que comecei a te imaginar',
    'Querendo do seu lado sempre estar',
    'Brigando ou brincando',
    'Te beijando ou te abraçando',
    'Mas sempre, aprendendo a te amar!'
  ]
]

export function TheLetterTemplate() {
  return (
    <main
      className='min-h-dvh w-dvw flex flex-col items-center justify-start py-8 px-4'
      style={{
        background:
          'linear-gradient(135deg, #0c1a2e 0%, #0a2540 45%, #0d2a38 75%, #0c1a2e 100%)'
      }}
    >
      <BackButton />
      <div
        className='relative w-full max-w-2xl'
        style={{
          backgroundColor: '#fef9f3',
          boxShadow:
            '0 10px 60px rgba(0,0,0,0.55), 0 2px 14px rgba(0,0,0,0.35)'
        }}
      >
        {/* Double border */}
        <div
          className='absolute pointer-events-none'
          style={{
            inset: '18px',
            border: '2px solid rgba(26,74,126,0.48)'
          }}
        />
        <div
          className='absolute pointer-events-none'
          style={{
            inset: '24px',
            border: '1px solid rgba(26,74,126,0.25)'
          }}
        />

        {/* Corner roses */}
        <div className='absolute top-0 left-0 pointer-events-none'>
          <RoseCorner />
        </div>
        <div
          className='absolute top-0 right-0 pointer-events-none'
          style={{ transform: 'scaleX(-1)' }}
        >
          <RoseCorner />
        </div>
        <div
          className='absolute bottom-0 left-0 pointer-events-none'
          style={{ transform: 'scaleY(-1)' }}
        >
          <RoseCorner />
        </div>
        <div
          className='absolute bottom-0 right-0 pointer-events-none'
          style={{ transform: 'scale(-1,-1)' }}
        >
          <RoseCorner />
        </div>

        {/* Letter content */}
        <div
          className='relative flex flex-col px-14 sm:px-14 py-20 gap-7'
          style={{ zIndex: 1 }}
        >
          {/* Title */}
          <h1
            className='text-center'
            style={{
              fontFamily: hand,
              color: navyInk,
              fontSize: '2.4rem',
              fontWeight: 700,
              lineHeight: 1.1
            }}
          >
            Primavera Distante
          </h1>

          {/* Divider */}
          <div className='flex items-center gap-3'>
            <div
              className='flex-1'
              style={{
                height: '1px',
                background: `linear-gradient(to right, transparent, ${teal}55, transparent)`
              }}
            />
            <span style={{ color: teal, fontSize: '0.85rem' }}>
              ✦
            </span>
            <div
              className='flex-1'
              style={{
                height: '1px',
                background: `linear-gradient(to right, transparent, ${teal}55, transparent)`
              }}
            />
          </div>

          {/* Salutation */}
          <p
            style={{
              fontFamily: hand,
              color: navyInk,
              fontSize: '1.2rem',
              fontWeight: 600
            }}
          >
            Minha linda, Larissa,
          </p>

          {/* Stanzas */}
          {theLetterArray.map((stanza, si) => (
            <div
              key={si}
              className='flex flex-col items-center'
              style={{ gap: '0.15rem' }}
            >
              {stanza.map((verse, vi) => (
                <p
                  key={vi}
                  className='text-center'
                  style={{
                    fontFamily: hand,
                    color: navyInk,
                    fontSize: '1.2rem',
                    lineHeight: '2rem'
                  }}
                >
                  {verse}
                </p>
              ))}
            </div>
          ))}

          {/* Closing */}
          <div
            className='flex flex-col items-end gap-1 mt-4'
            style={{ fontFamily: hand }}
          >
            <p
              style={{
                color: teal,
                fontSize: '1.1rem',
                fontWeight: 500
              }}
            >
              Com muito carinho,
            </p>
            <p
              style={{
                color: navyInk,
                fontSize: '1.2rem',
                fontWeight: 700,
                lineHeight: 1.15
              }}
            >
              do teu beija-flor ♡
            </p>
          </div>

          {/* Bottom ornament */}
          <div className='flex justify-center mt-2'>
            <svg
              width='120'
              height='20'
              viewBox='0 0 120 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M 4,12 C 25,5 50,14 60,10 C 70,6 95,14 116,8'
                stroke={teal}
                strokeWidth='1.2'
                strokeLinecap='round'
                fill='none'
                opacity='0.5'
              />
              <circle
                cx='60'
                cy='10'
                r='2.5'
                fill={teal}
                opacity='0.4'
              />
              <circle
                cx='30'
                cy='11'
                r='1.5'
                fill={teal}
                opacity='0.3'
              />
              <circle
                cx='90'
                cy='9'
                r='1.5'
                fill={teal}
                opacity='0.3'
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  )
}
