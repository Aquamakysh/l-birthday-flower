import { PetalProps } from '..'

export function Petal14({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal14) {
    return (
      <path
        d='M522 107.08C522 67.0804 540.5 45.5804 539 43.0804C537.5 40.5804 472.5 35.0803 475 90.0804C477.5 145.08 537.5 212.58 543 214.58C547.974 219.266 537 179.08 529.704 157.58C522.407 136.08 522 121.631 522 107.08Z'
        fill='#40E0D0'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M522 107.08C522 67.0804 540.5 45.5804 539 43.0804C537.5 40.5804 472.5 35.0803 475 90.0804C477.5 145.08 537.5 212.58 543 214.58C547.974 219.266 537 179.08 529.704 157.58C522.407 136.08 522 121.631 522 107.08Z'
      fill='#FF9BBF'
      onClick={() => togglePetal('petal14')}
    />
  )
}
