import { PetalProps } from '..'

export function Petal02({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal02) {
    return (
      <path
        d='M637.5 104.58C621.5 105.58 619 133.58 621 134.08C623 134.58 631 122.58 643 119.08C657.5 114.58 663.5 120.08 664 119.08C665 117.08 653.5 103.58 637.5 104.58Z'
        fill='#3EC6B8'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M637.5 104.58C621.5 105.58 619 133.58 621 134.08C623 134.58 631 122.58 643 119.08C657.5 114.58 663.5 120.08 664 119.08C665 117.08 653.5 103.58 637.5 104.58Z'
      fill='#D7628C'
      onClick={() => togglePetal('petal02')}
    />
  )
}
