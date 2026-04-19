import { Kalam } from 'next/font/google'

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})
const font = kalam.style.fontFamily
const inkColor = '#1e0d02'

const gauchitaArray = [
  [
    'Gauchita quando te vejo',
    'assim de vestido rodado,',
    'de rendas brancas floriado,',
    'cabelos soltos nos ombros,',
    'pendo de cima do lombo',
    'do meu pingo malacara',
    'meu coração quase para',
    'no teu olhar eu me tombo.'
  ],
  [
    'Gauchita, flor perfumada,',
    'prendinha do meu encanto,',
    'a paixão aumenta outro tanto',
    'quando estamos juntinhos,',
    'chimarreando com carinho,',
    'assim numa linda sombra',
    'que sinto no bico da bomba',
    'o sabor do teu beijinho.'
  ],
  [
    'Gauchita faceira,',
    'boneca viva do pago,',
    'neste meu coração vago,',
    'não existe cancela;',
    'pra ti chinoquinha bela,',
    'entrar quando quiseres,',
    'mas pra outras mulheres',
    'está fechada e tem tramela.'
  ],
  [
    'Gauchita, podes pensar',
    'e resolvas ir na garupa,',
    'prometo assumir a culpa',
    'de nada tenhas medo;',
    'seis léguas é um brinquedo',
    'pro malacara andar serenoso',
    'pelo civil e relogioso',
    'vamos casar amanhã bem cedo.'
  ]
]

export function GauchitaTemplate() {
  return (
    <main
      className='relative w-dvw min-h-dvh overflow-x-hidden'
      style={{
        backgroundColor: '#e4d190',
        backgroundImage: [
          // corner stains
          'radial-gradient(ellipse at 0%   0%,   rgba(100,55,5,0.22)  0%, transparent 38%)',
          'radial-gradient(ellipse at 100% 0%,   rgba(110,60,8,0.18)  0%, transparent 32%)',
          'radial-gradient(ellipse at 100% 100%, rgba(95,50,5,0.20)   0%, transparent 36%)',
          'radial-gradient(ellipse at 0%   100%, rgba(105,58,6,0.22)  0%, transparent 40%)',
          // mid stains
          'radial-gradient(ellipse at 30% 55%, rgba(90,48,4,0.08) 0%, transparent 28%)',
          'radial-gradient(ellipse at 72% 38%, rgba(80,42,3,0.07) 0%, transparent 22%)',
          // vignette
          'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(50,22,0,0.22) 100%)'
        ].join(',')
      }}
    >
      {/* Full-page grain — fixed so it tiles smoothly when scrolling */}
      <div
        aria-hidden='true'
        className='pointer-events-none fixed inset-0 z-0'
        style={{ mixBlendMode: 'multiply', opacity: 0.2 }}
      >
        <svg
          width='100%'
          height='100%'
          xmlns='http://www.w3.org/2000/svg'
        >
          <filter id='full-grain'>
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
            filter='url(#full-grain)'
          />
        </svg>
      </div>

      {/* Candlelight — warm glow layers radiating FROM candle position */}
      <div
        aria-hidden='true'
        className='pointer-events-none fixed inset-0'
        style={{
          zIndex: 11,
          background: [
            // intense hotspot right at the candle
            'radial-gradient(ellipse 20% 16% at 93% 50%, rgba(255,220,90,0.60) 0%, transparent 100%)',
            // medium warm spread from candle
            'radial-gradient(ellipse 60% 52% at 89% 50%, rgba(255,152,30,0.28) 0%, transparent 100%)',
            // soft ambient reaching the centre
            'radial-gradient(ellipse 98% 82% at 86% 50%, rgba(255,110,14,0.10) 0%, transparent 100%)'
          ].join(','),
          animation: 'candle-flicker 2.8s ease-in-out infinite'
        }}
      />

      {/* Dark vignette — cone of light FROM candle, rest in darkness */}
      <div
        aria-hidden='true'
        className='pointer-events-none fixed inset-0'
        style={{
          zIndex: 15,
          background: [
            // radial dark anchored at candle side: transparent 0-62%, fades to dark 100%
            'radial-gradient(ellipse 98% 82% at 78% 50%, transparent 0%, transparent 62%, rgba(8,2,0,0.95) 100%)',
            // extra darkening top + bottom edges
            'linear-gradient(to bottom, rgba(8,2,0,0.65) 0%, transparent 22%, transparent 78%, rgba(8,2,0,0.65) 100%)'
          ].join(',')
        }}
      />

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center py-16 px-8 gap-12'>
        {/* Title */}
        <div className='flex flex-col items-center gap-3'>
          <h1
            className='text-6xl font-bold'
            style={{
              fontFamily: font,
              color: inkColor,
              lineHeight: 1.1
            }}
          >
            Gauchita
          </h1>
          {/* Quill-stroke underline */}
          <svg
            width='220'
            height='14'
            viewBox='0 0 220 14'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M 4,10 C 40,4 80,12 110,8 C 140,4 180,11 216,7'
              stroke={inkColor}
              strokeWidth='1.8'
              strokeLinecap='round'
              fill='none'
              opacity='0.7'
            />
            <path
              d='M 20,12 C 60,10 100,13 140,11 C 170,10 200,12 218,10'
              stroke={inkColor}
              strokeWidth='0.7'
              strokeLinecap='round'
              fill='none'
              opacity='0.35'
            />
          </svg>
        </div>

        {/* Stanzas */}
        {gauchitaArray.map((stanza, si) => (
          <div
            key={si}
            className='flex flex-col items-center'
            style={{ gap: '0.35rem' }}
          >
            {stanza.map((verse, vi) => (
              <p
                key={vi}
                className='text-center'
                style={{
                  fontFamily: font,
                  color: inkColor,
                  fontSize: '1.35rem',
                  lineHeight: '1.75',
                  fontWeight: 400,
                  letterSpacing: '0.01em'
                }}
              >
                {verse}
              </p>
            ))}
          </div>
        ))}

        {/* Bottom flourish */}
        <svg
          width='80'
          height='30'
          viewBox='0 0 80 30'
          xmlns='http://www.w3.org/2000/svg'
          style={{ opacity: 0.4, marginTop: '0.5rem' }}
        >
          <path
            d='M 40,2 C 30,10 10,12 4,20 C 10,22 20,18 40,28 C 60,18 70,22 76,20 C 70,12 50,10 40,2 Z'
            stroke={inkColor}
            strokeWidth='1'
            fill='none'
          />
        </svg>
      </div>
      {/* Candle — top-down view, fixed right-centre */}
      <div
        aria-hidden='true'
        className='pointer-events-none fixed'
        style={{
          right: '18px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20
        }}
      >
        {/* Wide halo that bleeds off the edge — flickering */}
        <div
          style={{
            position: 'absolute',
            inset: '-70px -80px',
            background: [
              'radial-gradient(ellipse at 50% 62%, rgba(255,220,80,0.55) 0%, rgba(255,148,28,0.28) 22%, transparent 60%)'
            ].join(','),
            animation: 'candle-flicker 2.8s ease-in-out infinite'
          }}
        />
        <svg
          width='68'
          height='100'
          viewBox='0 0 68 100'
          xmlns='http://www.w3.org/2000/svg'
        >
          {/* Outer candle rim */}
          <circle
            cx='34'
            cy='70'
            r='30'
            fill='#cdc098'
            stroke='#a88050'
            strokeWidth='1.2'
          />
          {/* Wax body surface */}
          <circle cx='34' cy='70' r='27' fill='#f0e4bc' />
          {/* Surface texture blobs */}
          <circle
            cx='26'
            cy='64'
            r='4'
            fill='rgba(200,172,95,0.14)'
          />
          <circle
            cx='41'
            cy='74'
            r='5'
            fill='rgba(200,172,95,0.10)'
          />
          <circle
            cx='30'
            cy='77'
            r='3'
            fill='rgba(200,172,95,0.09)'
          />
          {/* Melted wax pool */}
          <ellipse
            cx='34'
            cy='69'
            rx='21'
            ry='18'
            fill='rgba(228,196,114,0.78)'
          />
          {/* Pool rim */}
          <ellipse
            cx='34'
            cy='69'
            rx='22'
            ry='19'
            fill='none'
            stroke='rgba(178,138,58,0.32)'
            strokeWidth='1'
          />
          {/* Wax ripple rings */}
          <ellipse
            cx='34'
            cy='69'
            rx='16'
            ry='14'
            fill='none'
            stroke='rgba(178,138,58,0.18)'
            strokeWidth='0.8'
          />
          <ellipse
            cx='34'
            cy='69'
            rx='10'
            ry='8'
            fill='none'
            stroke='rgba(178,138,58,0.12)'
            strokeWidth='0.6'
          />
          {/* Wick */}
          <line
            x1='34'
            y1='69'
            x2='34'
            y2='50'
            stroke='#1a0e06'
            strokeWidth='2.2'
            strokeLinecap='round'
          />
          {/* Burnt wick tip */}
          <circle cx='34' cy='50' r='2.4' fill='#2e1a0a' />
          {/* Flame group — dancing animation */}
          <g
            style={{
              transformBox: 'fill-box',
              transformOrigin: 'center bottom',
              animation: 'flame-dance 1.9s ease-in-out infinite'
            }}
          >
            {/* Outer glow halo */}
            <circle
              cx='34'
              cy='32'
              r='18'
              fill='rgba(255,148,22,0.14)'
            />
            {/* Glow */}
            <circle
              cx='34'
              cy='33'
              r='13'
              fill='rgba(255,122,14,0.28)'
            />
            {/* Flame body */}
            <circle
              cx='34'
              cy='34'
              r='9.5'
              fill='rgba(255,96,8,0.86)'
            />
            {/* Flame mid */}
            <circle
              cx='34'
              cy='36'
              r='6.2'
              fill='rgba(255,188,40,0.92)'
            />
            {/* Flame inner */}
            <circle
              cx='34'
              cy='38'
              r='3.5'
              fill='rgba(255,234,95,0.96)'
            />
            {/* Flame core */}
            <circle
              cx='34'
              cy='39'
              r='1.6'
              fill='rgba(255,252,195,1)'
            />
          </g>
        </svg>
      </div>
    </main>
  )
}
