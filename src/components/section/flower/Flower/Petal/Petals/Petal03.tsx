import { PetalProps } from '..'

export function Petal03({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal03) {
    return (
      <path
        d='M689.5 134.08C678.5 127.58 705 153.58 677 171.58C646.5 186.08 631 164.58 629 168.58C627 172.58 647.5 198.58 681.5 181.08C715.5 163.58 700.5 140.58 689.5 134.08Z'
        fill='#3EC6B8'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M689.5 134.08C678.5 127.58 705 153.58 677 171.58C646.5 186.08 631 164.58 629 168.58C627 172.58 647.5 198.58 681.5 181.08C715.5 163.58 700.5 140.58 689.5 134.08Z'
      fill='#D7628C'
      onClick={() => togglePetal('petal03')}
    />
  )
}
