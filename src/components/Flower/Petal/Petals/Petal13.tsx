import { PetalProps } from '..'

export function Petal13({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal13) {
    return (
      <path
        d='M583.5 55.0804C546.5 88.0804 555.5 155.58 553.5 167.08C551.5 178.58 516 73.5804 572.5 27.0804C603 0.580408 645.5 29.5804 648 41.0804C649 46.0804 621.5 23.5804 583.5 55.0804Z'
        fill='#40E0D0'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M583.5 55.0804C546.5 88.0804 555.5 155.58 553.5 167.08C551.5 178.58 516 73.5804 572.5 27.0804C603 0.580408 645.5 29.5804 648 41.0804C649 46.0804 621.5 23.5804 583.5 55.0804Z'
      fill='#FF9BBF'
      onClick={() => togglePetal('petal13')}
    />
  )
}
