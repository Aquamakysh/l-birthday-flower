import Link from 'next/link'

export function BackButton() {
  return (
    <Link
      href='/'
      className='fixed top-3 left-3 z-50 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-opacity hover:opacity-75 active:opacity-60'
      style={{
        background: 'rgba(12, 24, 48, 0.68)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.18)',
        color: 'rgba(255,255,255,0.92)',
        textDecoration: 'none',
        fontWeight: 500,
        letterSpacing: '0.02em'
      }}
    >
      ← Início
    </Link>
  )
}
