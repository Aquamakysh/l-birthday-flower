import { PetalProps } from '..'

export function Petal12({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal12) {
    return (
      <path
        d='M868.003 366.08C834.003 443.58 707.002 420.58 706.002 417.58C705.002 414.58 788.002 410.58 818.002 341.58C848.002 272.58 808.002 216.58 813.002 214.08C818.002 211.58 902.003 288.58 868.003 366.08Z'
        fill='#6CEADE'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M868.003 366.08C834.003 443.58 707.002 420.58 706.002 417.58C705.002 414.58 788.002 410.58 818.002 341.58C848.002 272.58 808.002 216.58 813.002 214.08C818.002 211.58 902.003 288.58 868.003 366.08Z'
      fill='#FFACCA'
      onClick={() => togglePetal('petal12')}
    />
  )
}
