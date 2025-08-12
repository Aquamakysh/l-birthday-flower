import { PetalProps } from '..'

export function Petal05({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal05) {
    return (
      <path
        d='M573 138.08C573 168.58 610.5 183.08 612 178.08C613.5 173.08 604.5 168.08 604 137.08C603.5 106.081 622 103.08 619.5 99.0805C617 95.0805 573 107.58 573 138.08Z'
        fill='#35C4B5'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M573 138.08C573 168.58 610.5 183.08 612 178.08C613.5 173.08 604.5 168.08 604 137.08C603.5 106.081 622 103.08 619.5 99.0805C617 95.0805 573 107.58 573 138.08Z'
      fill='#F484AC'
      onClick={() => togglePetal('petal05')}
    />
  )
}
