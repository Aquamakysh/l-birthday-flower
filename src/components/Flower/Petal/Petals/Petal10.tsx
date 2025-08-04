import { PetalProps } from '..'

export function Petal10({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal10) {
    return (
      <path
        d='M622.5 58.5803C655 55.5802 713.5 83.0804 701 100.081C687.5 118.08 669.5 84.0803 628.5 83.0803C587.5 82.0803 576.453 103.562 574 102.581C569 100.581 590 61.5804 622.5 58.5803Z'
        fill='#3CCBBD'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M622.5 58.5803C655 55.5802 713.5 83.0804 701 100.081C687.5 118.08 669.5 84.0803 628.5 83.0803C587.5 82.0803 576.453 103.562 574 102.581C569 100.581 590 61.5804 622.5 58.5803Z'
      fill='#FF8DB6'
      onClick={() => togglePetal('petal10')}
    />
  )
}
