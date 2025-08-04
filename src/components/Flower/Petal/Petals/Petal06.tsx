import { PetalProps } from '..'

export function Petal06({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal06) {
    return (
      <path
        d='M694.501 218.58C660.002 216.58 640.502 200.579 639.501 202.58C638.5 204.582 676.501 239.08 705.501 237.08C734.501 235.08 743.501 210.58 742.001 209.08C740.501 207.58 729 220.58 694.501 218.58Z'
        fill='#3CCBBD'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M694.501 218.58C660.002 216.58 640.502 200.579 639.501 202.58C638.5 204.582 676.501 239.08 705.501 237.08C734.501 235.08 743.501 210.58 742.001 209.08C740.501 207.58 729 220.58 694.501 218.58Z'
      fill='#FF8DB6'
      onClick={() => togglePetal('petal06')}
    />
  )
}
