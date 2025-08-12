import { PetalProps } from '..'

export function Petal18({ activePetal, togglePetal }: PetalProps) {
  if (activePetal.petal18) {
    return (
      <path
        d='M558.5 415.08C452 377.58 384.5 387.08 395.5 393.08C406.5 399.08 453.5 398.08 503.5 431.58C553.5 465.081 570 483.58 637 506.08C704 528.58 743 450.58 764 437.08C785 423.58 665 452.58 558.5 415.08Z'
        fill='#6CEADE'
      />
    )
  }

  return (
    <path
      className='cursor-pointer'
      d='M558.5 415.08C452 377.58 384.5 387.08 395.5 393.08C406.5 399.08 453.5 398.08 503.5 431.58C553.5 465.081 570 483.58 637 506.08C704 528.58 743 450.58 764 437.08C785 423.58 665 452.58 558.5 415.08Z'
      fill='#FFACCA'
      onClick={() => togglePetal('petal18')}
    />
  )
}
